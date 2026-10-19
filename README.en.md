# Aev0rnJP AI Hub

[日本語版](README.ja.md) | **English documentation**

Aev0rnJP AI Hub is a dark-themed browser-based AI toolkit designed for both smartphones and desktop computers. It is built as a static web app that can be hosted on GitHub Pages.

## Features

- **AI chat:** Runs an AI model in the browser with WebGPU on supported devices and browsers.
- **Code workspace:** Create and edit code, then copy it or save it as a file.
- **File analysis:** Load text files and supported PDF documents.
- **Web search:** Open an external search service to look up information.
- **Responsive layout:** Designed for mobile and desktop screens.
- **PWA support:** Compatible browsers may offer installation as an app.
- **Chat history:** Stores history in the browser's local storage.

## Deploy with GitHub Pages

1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`, then click **Save**.
5. After deployment finishes, open the public URL shown on the Pages settings screen.

## Getting started

1. Open the deployed site in a supported browser.
2. To use AI chat, select a model and wait for its initial download to finish.
3. Use the tabs in the app to access code editing, file analysis, and web search.

## Limitations and important notes

- **A compatible environment is required for AI inference.** AI chat may not work in browsers or on devices without WebGPU support.
- **The model must be downloaded first.** Startup time and performance depend on model size, device memory, GPU capability, and network conditions.
- **This is not fully offline.** Initial downloads of AI models and libraries require an internet connection. A cached app shell does not mean every feature will work offline.
- **Web search opens an external search service.** The app does not automatically fetch and summarize search results.
- **This is not a code execution environment.** You can create, edit, copy, and save code, but the site does not run code for you.
- **Image generation is not included.**
- AI responses can be inaccurate. Verify important information and review code before using it.
- Chat history is stored in the current browser's local storage. Use caution on shared devices.

## Repository files

- `index.html` — Main app
- `sw.js` — Service worker and caching
- `manifest.webmanifest` — PWA configuration
- `icon.svg` — App icon
- `README.md` — Japanese landing page
- `README.ja.md` — Full Japanese documentation
- `README.en.md` — English documentation

## License

Unless a license is explicitly included in this repository, the terms for use and redistribution may not be clearly defined. Add an appropriate license before publishing or reusing the project under specific terms.
