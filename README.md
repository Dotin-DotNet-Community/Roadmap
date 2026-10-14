# .NET Community Roadmap

This repository contains a static GitHub Pages site that visualizes a community roadmap for weekly learning packs, articles, quizzes, and practical challenges.

## Structure

- `index.html` — page structure
- `styles.css` — styling and responsive layout
- `script.js` — roadmap data and interaction logic

## Preview locally

From this folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. Open the repository settings.
3. Navigate to **Pages**.
4. Set the source to **Deploy from a branch**.
5. Choose the `main` branch and the repository root.

The static site will be published and available through GitHub Pages.

## Customize the roadmap

Edit the `roadmapData` array in `script.js` to match your own weekly community activities and links.

Each item supports:

- `title`
- `period`
- `summary`
- `color`
- `activities` with `type`, `name`, and `url`

This makes it easy to replace the sample .NET learning activities with your actual article and challenge links.
