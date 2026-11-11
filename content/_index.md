---
title: "GitDiffGraph for Rider: C# code changes as a graph"
description: "GitDiffGraph is a Rider plugin that draws a C# code change as a graph: which types changed, in what order they build on each other, and how they connect across projects."
layout: hextra-home
---

{{< hextra/hero-badge link="https://github.com/iustin94/gitdiffgraf-public/issues" >}}
  <span>Ideas and bug reports welcome on GitHub</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx:mt-6 hx:mb-6">
{{< hextra/hero-headline >}}
  A visualization tool for&nbsp;<br class="hx:sm:block hx:hidden" />C# code changes
{{< /hextra/hero-headline >}}
</div>

<div class="hero-video" id="heroVideo">
  {{< themed-video video="browser" src="videos/gitdiffgraph-in-browser.mp4" poster="videos/gitdiffgraph-in-browser-poster.jpg" shown="true" label="The graph page in a browser: choose what to compare, select a type, open its diff, open the lines behind a dependency, search" >}}
  {{< themed-video video="rider" src="videos/gitdiffgraph-in-rider.mp4" poster="videos/gitdiffgraph-in-rider-poster.jpg" shown="false" label="GitDiffGraph in Rider: choose what to compare, select a type, open its diff, open the lines behind a dependency, search" >}}
  <div class="hero-video-choice" role="tablist" aria-label="Where the graph is shown">
    <button type="button" role="tab" aria-selected="true" data-video="browser">In the browser</button>
    <button type="button" role="tab" aria-selected="false" data-video="rider">In Rider</button>
  </div>
</div>
{{< page-script src="js/hero-videos.js" >}}

<div class="hx:mb-12">
{{< hextra/hero-subtitle >}}
  GitDiffGraph is a Rider plugin that works alongside the Git diff. The diff shows a change line by line. The graph
  shows how those lines relate: which types changed, in what order they build on each other, and how they connect
  across projects. Built for agentic development: review what your AI agent changed, and let the agent walk you
  through it on the graph.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx:mb-12">
{{< hextra/hero-button text="Get it on JetBrains Marketplace" link="https://plugins.jetbrains.com/plugin/io.github.iustin94.gitdiffgraph" >}}
</div>

<div class="home-section">

## Use it to review

</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="AI-generated code"
    icon="sparkles"
    subtitle="The graph shows which types an agent added, removed and modified in your working tree, including ones you did not ask for. Connected to Rider's MCP server, the agent can pin notes on the graph to explain them."
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

## Built for agentic development

</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Review what the agent wrote"
    icon="eye"
    subtitle="Every type an agent added, removed or modified, and every dependency it created, drawn as one graph. Types you did not ask for stand out."
  >}}
  {{< hextra/feature-card
    title="The agent explains it on the graph"
    icon="chat-alt-2"
    subtitle="Connected to Rider's MCP server, the agent reads the graph, moves the view to what it is talking about and pins notes on the types and dependencies."
  >}}
  {{< hextra/feature-card
    title="Notes beside the graph"
    icon="annotation"
    subtitle="Numbered badges on the graph, the notes listed in a panel beside it. Kept per comparison, marked stale when the change moves on."
  >}}
  {{< hextra/feature-card
    title="Only while you look"
    icon="lock-closed"
    subtitle="The tools answer only while the GitDiffGraph window is open, on the project in focus. A closed window starts no analysis."
    link="docs/agents"
  >}}
{{< /hextra/feature-grid >}}

<div class="home-section">

## Features

</div>

<div class="feature-show" id="featureShow">
  <div class="feature-show-track">
    <figure>{{< themed-picture src="images/features/01-structure.jpg" alt="The whole change drawn as a graph of its types, boxed by project" >}}<figcaption><h3>Explore how a change is structured</h3><p>A graph of the types added, removed and modified since a baseline, and of the dependencies between them. Each type sits to the right of the types it depends on.</p></figcaption></figure>
    <figure>{{< themed-picture src="images/features/09-agent-notes.jpg" alt="The graph with an agent's numbered notes on its types and dependencies, and the notes panel beside it" >}}<figcaption><h3>Let your agent explain the change</h3><p>An AI agent connected to Rider's MCP server moves the view to the types it explains and pins numbered notes on them, listed beside the graph.</p></figcaption></figure>
    <figure>{{< themed-picture src="images/features/02-baseline.jpg" alt="The base and compare selectors in the header of the graph" >}}<figcaption><h3>Choose the baseline</h3><p>Compare the uncommitted changes with the last commit, a branch with the branch it left, or any two commits.</p></figcaption></figure>
    <figure>{{< themed-picture src="images/features/03-grouping.jpg" alt="Types boxed by project and by namespace" >}}<figcaption><h3>Group by project and namespace</h3><p>Types are boxed by their project and namespace, so you see how the parts of the solution depend on each other and which ones a change spans.</p></figcaption></figure>
    <figure>{{< themed-picture src="images/features/04-chain.jpg" alt="A selected type with its whole chain highlighted and arrows along the lines" >}}<figcaption><h3>Follow a connection end to end</h3><p>Select a type and its whole chain is highlighted: everything it depends on and everything that depends on it, however many steps away. Arrows along the lines show the direction.</p></figcaption></figure>
    <figure>{{< themed-picture src="images/features/05-coupling.jpg" alt="Rider with a dependency selected in the graph and the lines that create it open in Rider's diff, before and after" >}}<figcaption><h3>Explore the coupling between two types</h3><p>Double-click a dependency to see its kinds (inherits, implements, holds, signature, creates, calls, uses) and the lines that create it.</p></figcaption></figure>
    <figure>{{< themed-picture src="images/features/06-diff.jpg" alt="Rider with a type selected in the graph, its file selected in the Commit view and its diff open in the editor" >}}<figcaption><h3>Open the diff from the graph</h3><p>Double-click a type to open Rider's diff of its files. For uncommitted changes, the graph and Rider's Commit view follow each other's selection.</p></figcaption></figure>
    <figure>{{< themed-picture src="images/features/07-search.jpg" alt="A search for Basket: the matching types stay lit and the rest dims" >}}<figcaption><h3>Search and filter</h3><p>Search types by name. Filter out test projects, unchanged types and kinds of dependency.</p></figcaption></figure>
    <figure>{{< themed-picture src="images/features/08-staging.jpg" alt="Staged types drawn faded on the graph, the Stage and Unstage menu, and the legend" >}}<figcaption><h3>Stage from the graph</h3><p>Right-click a type to stage or unstage its files, or a dependency to stage the lines that create it. Staged ones are drawn faded, partly staged ones half faded.</p></figcaption></figure>
  </div>
  <button class="feature-show-previous" type="button" aria-label="Previous feature">‹</button>
  <button class="feature-show-next" type="button" aria-label="Next feature">›</button>
  <div class="feature-show-dots"></div>
</div>
{{< page-script src="js/feature-show.js" >}}

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

   Right-click a type or a dependency to stage or unstage it. Staged ones are drawn faded.

6. **Let an agent explain it**

   Connect your AI agent to Rider's MCP server. It moves the view to what it explains and pins numbered notes, listed beside the graph.


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
  {{< hextra/feature-card
    title="No telemetry"
    icon="shield-check"
    subtitle="The plugin records no telemetry and no usage data, and it makes no network requests of its own. Your code and the graph stay on your machine."
  >}}
  {{< hextra/feature-card
    title="MCP toolset"
    icon="puzzle"
    subtitle="Nine tools in Rider's own MCP server: read the graph and the view, focus, fit, and pin, list and remove notes."
    link="docs/agents"
  >}}
{{< /hextra/feature-grid >}}

<div class="hx:mt-16 hx:mb-8">
{{< callout type="info" >}}
  **Found a bug or have an idea?** [Open an issue on GitHub](https://github.com/iustin94/gitdiffgraf-public/issues/new): bug reports, suggestions and feature requests all go there. You can also browse [the open issues](https://github.com/iustin94/gitdiffgraf-public/issues) to see what's already planned.
{{< /callout >}}
</div>
