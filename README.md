# Alejandro Guzman — Personal Website

A responsive, single-page personal website built with plain HTML, CSS, and vanilla JavaScript. No frameworks, build step, or npm dependencies are required.

## Preview locally

Open `index.html` in a browser, or serve this directory with any static file server. The site uses Google Fonts when online and falls back to system fonts if they are unavailable.

## Personalize the site

- **Links:** Edit the `CONFIG` object at the very top of `script.js`. Set `email`, `linkedin`, and `github` to your own details. The current email and LinkedIn values are examples; replace them before publishing. Links with placeholder values are hidden automatically.
- **Projects:** Edit the `projects` array in `script.js`. Each entry supports `title`, `description`, `tags`, `githubUrl`, `liveDemoUrl`, and `status`. Leave either URL empty to omit that link. The project cards render automatically from this array.
- **Other copy:** Edit the relevant text in `index.html` to update the bio, ventures, experience, leadership, and contact copy.
- **Headshot:** Replace `assets/headshot.svg` with your own image. Update the image `src` in `index.html` if you choose a different filename, and write descriptive `alt` text.
- **Resume:** Replace `resume.pdf` in the repository root with your current PDF, keeping the filename `resume.pdf` so the Resume button keeps working.
- **Colors and layout:** Adjust the CSS custom properties at the top of `styles.css`. The primary palette is navy `#0B1F3A`, white, and muted gold `#C9A227`.

The light/dark theme preference is stored in `localStorage`. The site also respects reduced-motion preferences.

## Deploy to GitHub Pages

1. Push or commit the site to the **`main`** branch of `AllAboutAle.github.io`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **`main`** and the **`/ (root)`** folder, then save.
5. After GitHub Pages finishes publishing, visit `https://AllAboutAle.github.io`.

Because `index.html` is in the repository root, no build step or workflow configuration is needed.
