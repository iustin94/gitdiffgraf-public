---
title: "Getting started"
weight: 1
---

{{% steps %}}

### Check the requirements

- Rider 2026.2 or later.
- The **.NET 10 SDK** on the `PATH` Rider loads from your shell. The graph window says so when it is missing.
- A solution file named after the project (`<Name>.sln` or `<Name>.slnx`) in the project's root directory.

### Install

Settings → Plugins → Marketplace → **GitDiffGraph** → Install.

### Activate a license

Click the lock button (**Enter License**) in the tool window's toolbar, enter a license or start a trial on JetBrains
Marketplace, then click **Refresh**.

### Make a change

Edit C# files yourself or let your AI assistant do it. The graph shows everything that differs from `HEAD`.

### Open the graph

View → Tool Windows → Diff Graph, or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd>. The first analysis
loads the solution and takes a moment; after that the graph follows your edits on its own.

### Read the change

Start at the left: those types depend on nothing else in the change. Click a type to highlight what it connects to, double-click it to open its diff, double-click an edge to see
the lines that create that dependency.

### Stage what you reviewed

Right-click a type or an edge → **Stage** / **Unstage**. The badges show what is staged, partly staged or unstaged.

### Cut the noise

Find a type by name in the header. Under **Settings**: hide tests, hide unchanged neighbours, show changed edges only, pick edge kinds.

{{% /steps %}}

{{< callout type="info" >}}
  Graph looks stale or stuck? **Refresh** in the tool window's toolbar restarts the analyser and analyses the change
  again. Still wrong? [Open an issue](https://github.com/iustin94/gitdiffgraf-public/issues/new).
{{< /callout >}}
