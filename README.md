# Aev0rnJP AI Hub

Dark, responsive, browser-first AI workspace intended for GitHub Pages.

## Features
- Local AI chat through WebLLM when WebGPU is available.
- Lightweight code editor with copy and download actions.
- Browser-side reading for text, Markdown, CSV, JSON, and source files.
- PDF text extraction using PDF.js (requires loading the library online).
- Web search by opening DuckDuckGo or Google in a separate tab.
- Optional local chat history, JSON export, installable PWA manifest, and service-worker app-shell cache.
- Responsive layout for phones and desktop browsers.
- No image generation feature and no custom backend.

## Publish with GitHub Pages
1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then save.
4. Wait for the deployment status and open the published URL.

## Local AI requirements
The local model feature requires a compatible browser with WebGPU and sufficient free RAM/GPU memory. The app loads WebLLM and the selected model from external CDNs/model hosting; the first run may require a large download. Model support can vary by browser, GPU, drivers, and the upstream model catalog. If initialization fails, code editing, file viewing, and external search remain available.

## Honest limitations
- This is a static website. There is no backend, private API, or server-side search integration.
- Search opens an external search engine; it does not fetch or summarize results automatically.
- The service worker caches the app shell only. It does not guarantee that model files or external libraries are available offline.
- PDF parsing requires an online download of PDF.js on first use. Scanned-image PDFs do not automatically get OCR.
- Chat history is stored in browser localStorage only when enabled. Avoid storing sensitive information on shared devices.
- Local AI output can be inaccurate; verify important information.

## Privacy
No custom application server receives chat messages. When using local AI, prompts are processed by the model in the browser after its model assets have been downloaded. Requests to external CDNs and search engines are subject to those providers' own policies.

## License
Choose and add a license before redistributing this project.
