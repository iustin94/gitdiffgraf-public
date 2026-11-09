---
title: "Diff Graph for Rider"
layout: hextra-home
---

{{< hextra/hero-badge link="https://github.com/iustin94/gitdiffgraf-public/issues" >}}
  <span>Ideas and bug reports welcome on GitHub</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx:mt-6 hx:mb-6">
{{< hextra/hero-headline >}}
  Review a change by its structure,&nbsp;<br class="hx:sm:block hx:hidden" />not line by line
{{< /hextra/hero-headline >}}
</div>

<div class="hx:mb-12">
{{< hextra/hero-subtitle >}}
  AI-assisted workflows produce more code than anyone can comfortably read as a list of files. A git diff shows what
  changed; it does not show how the changes depend on each other. The Diff Graph tool window draws your uncommitted C#
  change as the graph of the types it touches, so you see the shape of a change before you read it.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx:mb-6" style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem;">
<div id="marketplace-install"></div>
<script src="https://plugins.jetbrains.com/assets/scripts/mp-widget.js"></script>
<script>
  MarketplaceWidget.setupMarketplaceWidget('install', 35771, "#marketplace-install");
</script>
{{< hextra/hero-button text="Getting started" link="/docs/getting-started" style="background: transparent; color: inherit; border: 1px solid currentColor;" >}}
</div>

<div class="hx:mt-10 hx:mb-12">
  <img src="images/screenshots/01-the-change-as-a-graph.png" alt="The change as a graph" class="hx:rounded-xl hx:border hx:border-gray-200 hx:dark:border-neutral-800 hx:shadow-lg" />
</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="The change as a graph"
    subtitle="One node per C# type your uncommitted change touches, one edge per dependency, read by Roslyn: inherits, implements, holds, signature, creates, calls, uses. Added in green, removed in red, modified in amber."
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-md:min-h-[340px]"
    image="images/screenshots/01-the-change-as-a-graph.png"
    imageClass="hx:top-[50%] hx:left-[24px] hx:w-[180%] hx:sm:w-[110%] hx:dark:opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(34,197,94,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Laid out like the architecture"
    subtitle="The types that depend on nothing else in the change sit at the left; what builds on them follows. Each project is a box around its types."
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-lg:min-h-[340px]"
    image="images/screenshots/02-one-type-and-what-depends-on-it.png"
    imageClass="hx:top-[50%] hx:left-[24px] hx:w-[180%] hx:sm:w-[110%] hx:dark:opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(245,158,11,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Rider's own diff, one click away"
    subtitle="Click a type to open Rider's diff of its files, the one the Commit view shows. Click a dependency to see the lines that create it. Select files in the Commit view to highlight their types."
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-md:min-h-[340px]"
    image="images/screenshots/03-the-same-diff-as-the-commit-view.png"
    imageClass="hx:top-[50%] hx:left-[24px] hx:w-[180%] hx:sm:w-[110%] hx:dark:opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(59,130,246,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Stage and unstage from the graph"
    subtitle="Right-click a type, or the lines of one dependency, to stage or unstage it. Every node and edge wears its stage: staged, partly staged, unstaged."
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-md:min-h-[340px]"
    image="images/screenshots/04-stage-from-the-graph.png"
    imageClass="hx:top-[50%] hx:left-[24px] hx:w-[180%] hx:sm:w-[110%] hx:dark:opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(168,85,247,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Filter the noise"
    icon="adjustments"
    subtitle="Find a type by name, hide test projects, hide unchanged neighbours, show changed edges only, pick the edge kinds to draw. The graph follows your edits and keeps the nodes where you moved them."
  >}}
  {{< hextra/feature-card
    title="Runs locally, uploads nothing"
    icon="lock-closed"
    subtitle="The analyser is bundled with the plugin and runs on your machine with the .NET SDK you already have. Nothing leaves it."
  >}}
{{< /hextra/feature-grid >}}

<div class="hx:mt-16" id="features">

## Features

**The graph**

- One node per C# type the change touches: class, record, struct, interface, enum, delegate.
- Node colour shows status: added (green), removed (red), modified (amber), unchanged neighbour (grey).
- One edge per dependency, read by Roslyn: `inherits`, `implements`, `holds`, `signature`, `creates`, `calls`, `uses`.
- Edges show whether the change added, removed or kept them.
- Left-to-right layout: the types that depend on nothing else in the change sit at the left.
- Each project is drawn as a box around its types.

**Reviewing**

- Click a type to open Rider's diff of its files, the same diff the Commit view shows.
- Click a dependency to see the changed lines that create it. Its two types are highlighted.
- Select files in the Commit view to highlight their types in the graph.
- Hover a type for its namespace, status, files and stage; hover an edge for its kinds, status and stage.

**Staging**

- Right-click a type or a dependency → **Stage** / **Unstage**.
- Stage badges on every node and edge: staged, partly staged, unstaged.

**Filtering and navigation**

- Find a type by name.
- Hide test projects, hide unchanged neighbours, show changed edges only.
- Pick which edge kinds to draw.
- Pan, zoom and drag nodes. Positions are kept across reloads; **re-layout** and **fit** reset the view.

**In Rider**

- The **Diff Graph** tool window, opened with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd>.
- Updates by itself as files change; **Refresh** restarts the analysis.
- Runs locally with the bundled analyser and your .NET 10 SDK. Nothing is uploaded.

</div>

<div class="hx:mt-16 hx:mb-8">
{{< callout type="info" >}}
  **Found a bug or have an idea?** [Open an issue on GitHub](https://github.com/iustin94/gitdiffgraf-public/issues/new): bug reports, suggestions and feature requests all go there. You can also browse [the open issues](https://github.com/iustin94/gitdiffgraf-public/issues) to see what's already planned.
{{< /callout >}}
</div>
