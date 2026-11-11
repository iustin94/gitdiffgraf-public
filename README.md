# GitDiffGraph for Rider — product page

The public page for the [GitDiffGraph](https://plugins.jetbrains.com/plugin/io.github.iustin94.gitdiffgraph) Rider
plugin: what it does, screenshots, install steps, the [EULA](content/eula.md) and the changelog. The plugin's source is
not here; the plugin is installed from JetBrains Marketplace, and bugs go to
[Issues](https://github.com/iustin94/gitdiffgraf-public/issues).

## Site

A Hugo site on the [Hextra](https://imfing.github.io/hextra/) theme, a git submodule under `themes/hextra` pinned to
v0.13.0. Clone with `--recurse-submodules`, or run `git submodule update --init` after cloning.

```sh
hugo server          # http://localhost:1313/
hugo --minify        # ./public
```

| To change | Edit |
|---|---|
| Navbar (Docs, Changelog, Issues, search, theme toggle), Marketplace and issues links | `hugo.toml` `[menu.main]`, `[params]` |
| Footer links, in groups (Product, Documentation, Support, Legal) | `hugo.toml` `[menu.footer]`, drawn by `layouts/_partials/custom/footer.html` |
| Footer copyright line | `i18n/en.yaml` `copyright` |
| Hero (title, the two videos and their toggle), use cases, the feature card show, how to use it, technical details, the issue callout | `content/_index.md` |
| The hero videos, the feature pictures and their scripts | `static/videos/`, `static/images/features/`, `static/js/` |
| A picture or video in the page's theme | every file is a pair, `<name>-light.<ext>` and `<name>-dark.<ext>`; pages name the pair without the suffix through `{{< themed-picture src=… alt=… >}}` and `{{< themed-video … >}}` (`layouts/_shortcodes/`). `themed-picture` shows the pair's member of the `light`/`dark` class Hextra sets on `<html>` (`assets/css/custom.css`); `static/js/hero-videos.js` loads the video and poster of that theme and reloads them on the theme toggle. The build fails naming each missing member |
| The full feature list | `content/docs/features.md` |
| Styling of the product page and the footer links | `assets/css/custom.css` (Hextra loads it after its own CSS) |
| Screenshots | `static/images/screenshots/`, referenced by `content/docs/how-it-works.md` |
| Getting started | `content/docs/getting-started.md` |
| How it works, limits | `content/docs/how-it-works.md` |
| EULA, changelog | `content/eula.md`, `content/changelog.md` |
| Theme version | `git -C themes/hextra checkout <tag>`, then commit the submodule |

`.github/workflows/hugo.yml` builds and deploys to GitHub Pages on every push to `main` (Settings → Pages → Source:
GitHub Actions). The site lives at `https://gitdiffgraph.olaru.dk/` (Settings → Pages → custom domain), which is also
the `baseURL` in `hugo.toml`; the workflow takes the URL from Pages, so the two must agree.
