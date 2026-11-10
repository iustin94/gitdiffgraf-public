---
title: "Changelog"
description: "What changed in each release of GitDiffGraph for Rider."
---

## 0.12.0

**Layout**

- A new layout draws the whole graph in one pass, with few crossing lines, and routes every line around types and
  boxes. The previous layout stays one click away in the header.
- Project and namespace boxes, nested, each switched on or off in the header.
- A line style choice: orthogonal, straight or curved.
- Selecting a type, a dependency line or files in the Commit view zooms the graph to what is highlighted.
- Types and boxes are no longer dragged by hand: the layout places everything, so the lines always stay routed.

**Staging**

- The graph always shows the whole working tree, with a stage badge on every type and line; the staged-only toggle
  is gone.
- The right-click menu says **Stage** and **Unstage**.

**Licensing**

- A JetBrains Marketplace licence or trial is required; the tool window asks for one, with a key button to enter it.

**Name**

- The plugin, its tool window and its action are named **GitDiffGraph**.

**Fixes**

- A repository with more than one solution file: the graph analyses the solution Rider has open.
- The plugin finds its bundled analyser in every Rider install.

## 0.11.1

- Stage and unstage a type, or the lines behind a dependency, from the graph's right-click menu.
- Stage badges on every type and dependency line: staged, partly staged, unstaged.

## 0.11.0

- The **Diff Graph** tool window draws your uncommitted C# change as the graph of the types it touches, opened with
  `Ctrl+Shift+Alt+G`.
- Click a type to open Rider's diff of its files, the same diff the Commit view shows.
- Click a dependency line to see the changed lines that create it.
- Select files in the Commit view to highlight their types in the graph.
- A staged-only toggle limits the graph and the diff to what is staged.
- The graph refreshes by itself as files change; **Refresh** restarts the analysis.
