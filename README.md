# Diff Graph for Rider — product page

The public page for the [Diff Graph](https://plugins.jetbrains.com/plugin/io.github.iustin94.gitdiffgraph) Rider
plugin: what it does, screenshots, install steps, the [EULA](content/eula.md) and the changelog. The plugin's source is
not here; release zips are attached to [Releases](https://github.com/iustin94/gitdiffgraf-public/releases) and bugs go
to [Issues](https://github.com/iustin94/gitdiffgraf-public/issues).

## Site

A Hugo site with no theme: `layouts/` holds the three templates, `assets/css/site.css` the styling.

```sh
hugo server          # http://localhost:1313/gitdiffgraf-public/
hugo --minify        # ./public
```

| To change | Edit |
|---|---|
| Tagline, Marketplace / releases / issues links, vendor | `hugo.toml` `[params]` |
| Intro paragraph and the feature cards | `content/_index.md` |
| Screenshots | drop images into `content/screenshots/`; shown in file-name order, the name becomes the caption (`02-stage-from-the-graph.png` → "Stage from the graph"); the first one is also the hero image |
| Install steps, how it works, limits | `layouts/index.html` |
| EULA, changelog | `content/eula.md`, `content/changelog.md` |

`.github/workflows/hugo.yml` builds and deploys to GitHub Pages on every push to `main` (Settings → Pages → Source:
GitHub Actions). The `baseURL` in `hugo.toml` is the Pages URL; set a custom domain there and in Settings → Pages
when one exists.
