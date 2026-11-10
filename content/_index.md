---
title: "Diff Graph for Rider"
layout: hextra-home
---

<div class="hero-video">
  <video src="videos/gitdiffgraph-in-use.mp4" poster="videos/gitdiffgraph-in-use-poster.jpg" autoplay muted loop playsinline preload="metadata" aria-label="The graph in use: select a type, open its diff, follow a dependency, search"></video>
</div>

{{< hextra/hero-badge link="https://github.com/iustin94/gitdiffgraf-public/issues" >}}
  <span>Ideas and bug reports welcome on GitHub</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx:mt-6 hx:mb-6">
{{< hextra/hero-headline >}}
  A visualization tool for&nbsp;<br class="hx:sm:block hx:hidden" />C# code changes
{{< /hextra/hero-headline >}}
</div>

<div class="hx:mb-12">
{{< hextra/hero-subtitle >}}
  GitDiffGraph is a Rider plugin that works alongside the Git diff. The diff shows a change line by line. The graph
  shows how those lines relate: which types changed, in what order they build on each other, and how they connect
  across projects.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx:mb-12" style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem;">
<div id="marketplace-install"></div>
<script src="https://plugins.jetbrains.com/assets/scripts/mp-widget.js"></script>
<script>
  MarketplaceWidget.setupMarketplaceWidget('install', 35771, "#marketplace-install");
</script>
{{< hextra/hero-button text="Getting started" link="/docs/getting-started" style="background: transparent; color: inherit; border: 1px solid currentColor;" >}}
</div>

<div class="home-section">

## Use it to review

</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="AI-generated code"
    icon="sparkles"
    subtitle="The graph shows which types an agent added, removed and modified in your working tree, including ones you did not ask for."
  >}}
  {{< hextra/feature-card
    title="Uncommitted changes"
    icon="pencil"
    subtitle="The graph shows your own change before you commit it. Types and dependencies can be staged from the graph."
  >}}
  {{< hextra/feature-card
    title="Pull requests"
    icon="users"
    subtitle="The graph shows what a branch changed since it left its target branch, as a pull request does. It works on any branch you have fetched."
  >}}
  {{< hextra/feature-card
    title="Branch and commit comparison"
    icon="switch-horizontal"
    subtitle="Compare any two branches, tags or commits, or compare the working tree with any of them."
  >}}
{{< /hextra/feature-grid >}}

<div class="home-section">

## Features

</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Explore how a change is structured"
    icon="share"
    subtitle="A graph of the types added, removed and modified since a baseline, and of the dependencies between them. Each type sits to the right of the types it depends on."
  >}}
  {{< hextra/feature-card
    title="Choose the baseline"
    icon="switch-horizontal"
    subtitle="Compare the uncommitted changes with the last commit, a branch with the branch it left, or any two commits."
  >}}
  {{< hextra/feature-card
    title="Group by project and namespace"
    icon="view-grid"
    subtitle="Types are boxed by their project and namespace, so you see how the parts of the solution depend on each other and which ones a change spans."
  >}}
  {{< hextra/feature-card
    title="Follow a connection end to end"
    icon="cursor-click"
    subtitle="Select a type and its whole chain is highlighted: everything it depends on and everything that depends on it, however many steps away. Arrows along the lines show the direction."
  >}}
  {{< hextra/feature-card
    title="Explore the coupling between two types"
    icon="code"
    subtitle="Double-click a dependency to see its kinds (inherits, implements, holds, signature, creates, calls, uses) and the lines that create it."
  >}}
  {{< hextra/feature-card
    title="Open the diff from the graph"
    icon="document-text"
    subtitle="Double-click a type to open Rider's diff of its files. For uncommitted changes, the graph and Rider's Commit view follow each other's selection."
  >}}
  {{< hextra/feature-card
    title="Search and filter"
    icon="search"
    subtitle="Search types by name. Filter out test projects, unchanged types and kinds of dependency."
  >}}
  {{< hextra/feature-card
    title="Stage from the graph"
    icon="check-circle"
    subtitle="Right-click a type to stage or unstage its files, or a dependency to stage the lines that create it. Each one shows whether it is staged."
  >}}
{{< /hextra/feature-grid >}}

<div class="home-section-note">

The [full feature list](docs/features) is in the documentation.

</div>

<div class="home-section">

## How to use it

1. **Open the graph**

   The GitDiffGraph tool window (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd>) shows every type the change added (green), removed (red) or modified (amber), and the dependencies between them.

2. **Choose what is compared**

   It starts with the uncommitted changes since the last commit. The `base:` and `compare:` selectors in the graph's header take a branch, a tag or a commit.

3. **Select a type**

   Click it. Its whole chain is highlighted, in both directions, with arrows along the lines pointing at what is depended on. The rest dims.

4. **Open the diff**

   Double-click a type for Rider's diff of its files. Double-click a dependency for the lines that create it.

5. **Stage from the graph**

   Right-click a type or a dependency to stage or unstage it.


</div>

<div class="home-section">

## How it fits with the Git diff

</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="The diff shows the lines"
    icon="document-text"
    subtitle="A Git diff shows which lines changed in which files. It is where you read the code."
  >}}
  {{< hextra/feature-card
    title="The graph shows how they relate"
    icon="share"
    subtitle="The graph shows which types those lines belong to, what depends on what, and which projects are involved."
  >}}
  {{< hextra/feature-card
    title="Use them together"
    icon="switch-horizontal"
    subtitle="Start in the graph to see what a change is made of, then open the diff from it to read the code."
  >}}
{{< /hextra/feature-grid >}}

<div class="home-section">

## What the graph shows

- Which types a change adds, removes and modifies.
- Which types depend on a changed type.
- Whether a change is one group of connected types or several separate groups.
- Which projects a change spans.

</div>

<div class="home-section">

## Technical details

</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Roslyn analysis"
    icon="badge-check"
    subtitle="Dependencies are read by Roslyn, the C# compiler. Seven kinds are drawn: inherits, implements, holds, signature, creates, calls, uses."
  >}}
  {{< hextra/feature-card
    title="Runs locally"
    icon="lock-closed"
    subtitle="The analyser is bundled with the plugin and runs on your machine with your .NET SDK. Nothing is uploaded."
  >}}
{{< /hextra/feature-grid >}}

<div class="home-section">

GitDiffGraph needs a JetBrains Marketplace licence or trial. [How it works](docs/how-it-works) is in the
documentation.

</div>

<div class="hx:mt-16 hx:mb-8">
{{< callout type="info" >}}
  **Found a bug or have an idea?** [Open an issue on GitHub](https://github.com/iustin94/gitdiffgraf-public/issues/new): bug reports, suggestions and feature requests all go there. You can also browse [the open issues](https://github.com/iustin94/gitdiffgraf-public/issues) to see what's already planned.
{{< /callout >}}
</div>
