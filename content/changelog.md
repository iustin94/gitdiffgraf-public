---
title: "Changelog"
description: "What changed in each release of GitDiffGraph for Rider."
---

## 2026.2.0

**Agents explain the change**

- An AI agent connected to Rider's MCP server, such as Claude Code, can read the graph, move the view to the types
  and dependencies it names, and pin notes on them to explain the change.
- It works only while the GitDiffGraph window is open, and only on the project in focus.
- A note is a numbered badge on its type or dependency; the notes' texts are listed in a panel beside the graph,
  which can be collapsed. Click a badge to find its note, or a note to move the view to it.
- Notes are kept per comparison in the project's `.idea/gitdiffgraph/notes/`. When an analysis draws a different
  graph, the notes are marked stale and listed greyed with the reason.

**Staging**

- A type's or a dependency's stage shows by its opacity: staged is faded, partly staged half faded, unstaged as
  before. The blue stage circles are gone.
- A conflicted type or dependency keeps its red circle.
- The legend's Staging section shows the three opacities and the conflict circle.

**Fixes**

- The graph follows Rider's theme, light or dark, and switches with it; it followed the system's colour scheme, so
  a light Rider could show a dark graph.

## 2026.1.0

**Choose what is compared**

- Two selectors in the graph's header, `base:` and `compare:`, as on a pull request page. They take the place of the
  title, and start as the last commit and the uncommitted changes, which is the graph as before.
- `compare:` takes a branch, a recent commit, a tag or a commit hash: the graph draws what it added since it left the
  base, the way a pull request shows it. Use it to review a teammate's branch, or two commits of your own.
- `base:` takes the same, or the last commit. With the uncommitted changes compared, it draws everything your
  branch holds since it left the base, committed or not.
- A double-click on a type opens Rider's diff of its files between the two sides.
- Staging shows only for the uncommitted changes since the last commit.

**Selecting and opening**

- A click on a type or a line now only selects it. A double-click opens the diff, or the lines behind a dependency.
  Before, every click opened the diff.
- Selecting a type highlights its whole chain: everything it depends on and everything that depends on it, however
  many steps away.
- Small arrows along the highlighted lines point at what is depended on, so the direction reads anywhere along a line.
- A right-click on a type or a dependency offers **Show Git diff**, what a double-click does in Rider, and
  **Open side pane**, what a double-click does in a browser. The stage moves follow under a line.

**Side pane**

- The side pane shows what a type depends on, what depends on it, and its changes. The Members and Whole file tabs
  are gone.
- Added and removed lines carry a green or red stripe and a stronger tint, readable in the dark theme.
- What a type depends on, and what depends on it, list one type per row.

**Legend**

- The key in the corner is now a legend in four sections, one entry per line: nodes, lines, selection and staging.
- It explains the line colours, which the key did not: added, removed and unchanged dependencies.
- Fit, and the zoom to a selection, place the graph beside the legend instead of under it.
- **Settings → Legend** hides it.

**Fixes**

- An unchanged dependency shows its own line when opened, not a nearby change.
- A selected type stays selected when Rider selects its files in the Commit view.
- A failed `dotnet restore` says what dotnet reported instead of an empty reason.
- A dependency on both sides whose own lines changed is drawn amber as modified, and stays with **Changed only**.
  Before, it was grey and hidden.
- A double-click on a type declared in several files, such as a partial class, opens Rider's diff of its changed
  files. Before, Rider answered that it had no change to show.
- Staging no longer moves the graph to another type: the graph follows the selections you make in the Commit view,
  not the ones Rider makes after staging.

## 0.13.0

**Header and settings**

- The header is one row: the title, a centred search, and **Fit**, **Re-layout** and **Settings**.
- Every display choice sits in the **Settings** panel, grouped as Types, Dependencies, Boxes and Drawing.
- The colour and stage key sits in the corner of the graph.

**Highlighting**

- Added, removed and modified types and lines use calmer colours by default.
- Selecting a type lights its chain in strong colours, with bold names and thicker lines, and dims the rest.
- Hovering a type or a line shows it in the same strong colours.
- Searching dims the lines that touch no matching type.

**Boxes**

- Long namespace and project names are shortened to fit their box, e.g. `…ApplicationCore.Services`.
- Hovering a box's label shows its full name.

**Fixes**

- Zooming and panning in Rider no longer leave parts of the old picture on screen.
- Hovering or clicking right on a line, not just beside it, picks the line.
- Curved lines draw again on graphs with project or namespace boxes, instead of an error.
- An error notice in the graph has a close button.

## 0.12.1

**Graph**

- Types show only their name. Their kind, namespace and project stay in the pane a click on the type opens.

**Fixes**

- A refresh with no file changed since the last graph shows that graph at once instead of analysing again, so opening
  a solution no longer analyses the change twice.
- A failure in the graph page's script shows in the tool window instead of an empty graph.

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

- The **GitDiffGraph** tool window draws your uncommitted C# change as the graph of the types it touches, opened with
  `Ctrl+Shift+Alt+G`.
- Click a type to open Rider's diff of its files, the same diff the Commit view shows.
- Click a dependency line to see the changed lines that create it.
- Select files in the Commit view to highlight their types in the graph.
- A staged-only toggle limits the graph and the diff to what is staged.
- The graph refreshes by itself as files change; **Refresh** restarts the analysis.
