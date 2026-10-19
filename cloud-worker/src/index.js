const ALLOWED_ORIGIN = "https://mylifereading6666-oss.github.io";
const MODEL = "@cf/meta/llama-3.1-8b-instruct-fast";

function json(data, status = 200, origin = "") {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
  if (origin === ALLOWED_ORIGIN) headers["Access-Control-Allow-Origin"] = origin;
  return new Response(JSON.stringify(data), { status, headers });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (origin && origin !== ALLOWED_ORIGIN) return json({ error: "Origin is not allowed." }, 403, "");
    if (request.method === "OPTIONS") {
      if (origin !== ALLOWED_ORIGIN) return new Response(null, { status: 403 });
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
          "Vary": "Origin"
        }
      });
    }
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/health") return json({ ok: true, model: MODEL }, 200, origin);
    if (request.method !== "POST" || url.pathname !== "/chat") return json({ error: "Use GET /health or POST /chat." }, 404, origin);

    let body;
    try {
      const raw = await request.text();
      if (raw.length > 50000) return json({ error: "Request is too large. Shorten the message." }, 413, origin);
      body = JSON.parse(raw);
    } catch {
      return json({ error: "Invalid JSON request." }, 400, origin);
    }
    if (!Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > 20) {
      return json({ error: "messages must contain 1–20 items." }, 400, origin);
    }
    const messages = body.messages.map(m => ({
      role: ["system", "user", "assistant"].includes(m?.role) ? m.role : "user",
      content: String(m?.content ?? "").slice(0, 10000)
    }));
    if (!messages.some(m => m.role === "user")) return json({ error: "A user message is required." }, 400, origin);

    try {
      const result = await env.AI.run(MODEL, {
        messages,
        max_tokens: Math.min(Math.max(Number(body.max_tokens) || 700, 1), 1000),
        temperature: 0.7
      });
      const answer = result?.response || result?.choices?.[0]?.message?.content || "";
      if (!answer) return json({ error: "The AI service returned an empty answer. Please try again." }, 502, origin);
      return json({ answer, model: MODEL }, 200, origin);
    } catch (error) {
      return json({ error: "Cloud AI request failed. Check the Workers AI binding and free quota, then retry.", detail: String(error?.message || error).slice(0, 300) }, 502, origin);
    }
  }
};
