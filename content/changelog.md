---
title: "Changelog"
description: "What changed in each release of Diff Graph for Rider."
---

## 2026.1.0

- A new layout lays out the whole graph in one pass: fewer crossing lines, and every line routed around types and boxes. The previous layout stays one click away in the header.
- Project and namespace boxes, each switched on or off in the header.
- A line style choice: orthogonal, straight or curved.
- Selecting a type, a dependency line or files in the Commit view zooms the graph to what is highlighted.
- Types and boxes are no longer dragged by hand: the layout places everything, so the lines always stay routed.

## 0.11.1

- Staged and working-tree snapshots: the graph of what is staged, or of the whole working tree.
- Stage and unstage types and dependency lines from the graph.
- Commit view grouping: clicking a type opens Rider's diff; Commit view selection highlights the graph.
- The Diff Graph tool window, with a refresh action (`Ctrl+Shift+Alt+G`).
