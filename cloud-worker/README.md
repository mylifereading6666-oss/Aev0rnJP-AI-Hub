# Aev0rnJP AI Hub — Cloudflare Workers AI

This is the small cloud endpoint used by the GitHub Pages frontend. It runs inference on Cloudflare, so the phone does not need WebGPU or a large local model download.

## Deploy it

1. Sign in to Cloudflare and open **Workers & Pages**.
2. Create a Worker named `aev0rn-jp-ai-hub`.
3. Upload/deploy the contents of this folder using Wrangler, or create a Worker from the dashboard and paste `src/index.js`.
4. In the Worker settings, add an **AI binding** named `AI` (model access is provided by Workers AI). If using Wrangler, `wrangler.toml` declares this binding.
5. Deploy the Worker. The public URL will look like `https://aev0rn-jp-ai-hub.<your-subdomain>.workers.dev`.
6. Open the GitHub Pages site, go to **モデル・設定**, and enter the URL ending in `/chat`, e.g. `https://aev0rn-jp-ai-hub.<your-subdomain>.workers.dev/chat`. Save it, then use **接続テスト**. The test checks the Worker's `/health` route.
7. Start a chat. The frontend sends conversation messages to the Worker over HTTPS.

## Free quota and privacy

Workers AI currently documents a daily free allocation of 10,000 Neurons, after which requests may fail unless the account is on a paid plan. Limits and model availability can change; check Cloudflare's current pricing page.

Chat text is sent to Cloudflare Workers AI for generation. Do not send passwords, addresses, or other sensitive information. The frontend does not contain an API token. The Worker only allows requests from this project's GitHub Pages origin and limits request size and output tokens, but a public endpoint can still be abused and quota may be consumed.

- Pricing: https://developers.cloudflare.com/workers-ai/platform/pricing/
- Secrets guidance: https://developers.cloudflare.com/workers/configuration/secrets/

## Local development

Install Wrangler and authenticate with your Cloudflare account, then run:

```sh
npx wrangler deploy
```

Run the command from this folder. Do not commit API tokens or account credentials.
