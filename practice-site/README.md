# practice-site

A small React + Vite site, built for GitHub Pages deployment practice.
No hand-written HTML — the page is composed entirely from JSX components
(`src/App.jsx`) and compiled by Vite. The only `.html` file is the tiny
auto-generated entry shell Vite requires (`index.html`), which you never
edit by hand.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Deploy to GitHub Pages

### 1. Create a GitHub repo

Create a new repo, e.g. `practice-site`, then push this folder to it:

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/practice-site.git
git push -u origin main
```

### 2. Set the Vite base path

Open `vite.config.js` and make sure `base` matches your repo name exactly:

```js
base: '/practice-site/',
```

> If you're deploying to a **user/org page** instead (a repo literally named
> `<your-username>.github.io`), set `base: '/'` instead.

### 3. Enable GitHub Pages via Actions

In your GitHub repo:

1. Go to **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**

That's it — no branch to configure manually. The workflow at
`.github/workflows/deploy.yml` handles the rest.

### 4. Push and watch it deploy

Every push to `main` triggers the workflow:

1. Installs dependencies
2. Runs `npm run build` (outputs to `dist/`)
3. Uploads `dist/` as a Pages artifact
4. Deploys it to GitHub Pages

Check the **Actions** tab in your repo to watch the run. Once it finishes,
your site will be live at:

```
https://<your-username>.github.io/practice-site/
```

## Project structure

```
practice-site/
├── .github/workflows/deploy.yml   # CI/CD: build + deploy on push to main
├── src/
│   ├── App.jsx                    # page content, all JSX
│   ├── App.css                    # component styles
│   ├── index.css                  # global styles/reset
│   └── main.jsx                   # React entry point
├── index.html                     # minimal Vite entry shell (auto-generated)
├── vite.config.js                 # base path lives here
└── package.json
```

## Making it your own

- Edit the `projects` array in `src/App.jsx` to swap in your own projects.
- Colors and theme tokens live at the top of `src/index.css` (`:root`).
- Once comfortable, try adding a second page with `react-router-dom`
  (remember `HashRouter` is easiest on GitHub Pages, since it avoids
  needing extra server-side rewrite rules for deep links).
