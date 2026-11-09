# Diff Graph for Rider — product page

The public page for the [Diff Graph](https://plugins.jetbrains.com/plugin/io.github.iustin94.gitdiffgraph) Rider
plugin: what it does, screenshots, install steps, the [EULA](content/eula.md) and the changelog. The plugin's source is
not here; release zips are attached to [Releases](https://github.com/iustin94/gitdiffgraf-public/releases) and bugs go
to [Issues](https://github.com/iustin94/gitdiffgraf-public/issues).

## Site

A Hugo site on the [Hextra](https://imfing.github.io/hextra/) theme, a git submodule under `themes/hextra` pinned to
v0.13.0. Clone with `--recurse-submodules`, or run `git submodule update --init` after cloning.

```sh
hugo server          # http://localhost:1313/
hugo --minify        # ./public
```

| To change | Edit |
|---|---|
| Navbar (Docs, Changelog, EULA, Issues, GitHub), Marketplace / releases / issues links | `hugo.toml` `[menu.main]`, `[params]` |
| Footer line (copyright, issue and release links) | `i18n/en.yaml` `copyright` |
| Hero, feature cards, the Features list, the issue callout | `content/_index.md` |
| Styling of the Features list | `assets/css/custom.css` (Hextra loads it after its own CSS) |
| Screenshots | `static/images/screenshots/`, referenced by `content/_index.md` and `content/docs/how-it-works.md` |
| Getting started | `content/docs/getting-started.md` |
| How it works, limits | `content/docs/how-it-works.md` |
| EULA, changelog | `content/eula.md`, `content/changelog.md` |
| Theme version | `git -C themes/hextra checkout <tag>`, then commit the submodule |

`.github/workflows/hugo.yml` builds and deploys to GitHub Pages on every push to `main` (Settings → Pages → Source:
GitHub Actions). The site lives at `https://gitdiffgraph.olaru.dk/` (Settings → Pages → custom domain), which is also
the `baseURL` in `hugo.toml`; the workflow takes the URL from Pages, so the two must agree.
