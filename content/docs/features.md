---
title: "Features"
description: "Every feature of GitDiffGraph: choosing what is compared, reading the graph, opening diffs, searching, staging and letting an agent explain the change."
weight: 3
---

**Choosing what is compared**

- Two selectors in the graph's header, `base:` and `compare:`. They start as the last commit and the uncommitted
  changes.
- `compare:` takes a branch, a recent commit, a tag or a commit hash: the graph draws what it added since it left the
  base, the way a pull request shows it.
- `base:` takes the same, or the last commit. With the uncommitted changes compared, the graph draws everything your
  branch holds since it left the base, committed or not.

**The graph**

- One node per C# type the change touches: class, record, struct, interface, enum, delegate.
- Node colour shows status: added (green), removed (red), modified (amber), unchanged neighbour (grey).
- One edge per dependency, read by Roslyn: `inherits`, `implements`, `holds`, `signature`, `creates`, `calls`, `uses`.
- Edges show whether the change added, removed or kept them.
- Left-to-right layout: the types that depend on nothing else in the change sit at the left.
- Each project is drawn as a box around its types.

**Reviewing**

- Double-click a type to open Rider's diff of its files: the Commit view's diff for the uncommitted change, the diff between
  the two sides otherwise.
- Click a type to select it and highlight its whole chain: everything it depends on and everything that depends on it. Arrows along
  the highlighted lines point at what is depended on.
- Double-click a dependency to see the lines that create it. A click selects it and highlights its two types.
- A legend in the corner explains the nodes, the lines, the selection and the staging.
- Select files in the Commit view to highlight their types in the graph.
- Hover a type for its namespace, status, files and stage; hover an edge for its kinds, status and stage.

**Staging**

- Right-click a type or a dependency → **Stage** / **Unstage**.
- Staging shows for the uncommitted changes since the last commit.
- Every node and edge shows its stage by its opacity: staged faded, partly staged half faded, unstaged at full
  opacity. A conflicted one carries a red circle.

**Agents**

- An AI agent connected to Rider's MCP server, such as Claude Code, reads the graph, moves the view to the types and
  dependencies it names and pins notes on them to explain the change.
- It works only while the GitDiffGraph window is open, on the project in focus.
- A note is a numbered badge on its type or dependency; the notes are listed in a collapsible panel beside the graph.
  Click a badge to find its note, or a note to move the view to it.
- Notes are kept per comparison in the project's `.idea/gitdiffgraph/notes/`, and marked stale when an analysis draws
  a different graph.
- Setup and the nine tools: [Agents and MCP](../agents/).

**Filtering and navigation**

- Find a type by name; types and lines that do not match dim.
- In **Settings**: hide test projects, hide unchanged neighbours, show changed edges only, pick which edge kinds to draw, switch project and namespace boxes, choose the layout and line style.
- Pan and zoom. The view is kept across reloads; **Re-layout** and **Fit** reset it.

**In Rider**

- The **GitDiffGraph** tool window, opened with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd>.
- Updates by itself as files change; **Refresh** restarts the analysis.
- Runs locally with the bundled analyser and your .NET 10 SDK. Nothing is uploaded.
