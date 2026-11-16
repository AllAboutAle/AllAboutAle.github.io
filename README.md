# Alejandro Guzman — Personal Website

Responsive single-page portfolio built with plain HTML, CSS, and vanilla JavaScript. No frameworks, build step, or npm dependencies are required.

## Personalize the site

- **Links:** Edit `CONFIG` at the top of `script.js`. The current values are Alejandro’s email, LinkedIn, and website link.
- **Projects:** Edit the `projects` array in `script.js`; entries support `title`, `description`, `tags`, `githubUrl`, `liveDemoUrl`, and `status`.
- **Bio and experience:** Edit the About, Experience, Ventures, and Leadership text in `index.html`.
- **Headshot:** Replace `assets/headshot.svg` with a portrait image and update the `<img src>` and alt text in `index.html` to match. The existing SVG is only a placeholder.
- **Resume:** Replace `resume.pdf` in the repository root with the final PDF, keeping the filename so the Resume button works. The current file is a placeholder, not the attached resume.
- **Branding:** Adjust the color variables at the top of `styles.css`; the current palette uses navy `#0B1F3A` and muted gold `#C9A227`.

The site stores the theme preference in `localStorage` and respects reduced-motion preferences.

## Deploy to GitHub Pages

1. Commit and push the site to the `main` branch of `AllAboutAle.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select **`main`** and **`/ (root)`**, and save.
4. Visit [https://allaboutale.github.io/](https://allaboutale.github.io/) after GitHub Pages finishes publishing.

The root `index.html` is served directly; no build or workflow is needed.
