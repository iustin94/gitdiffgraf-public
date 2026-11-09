---
title: "Diff Graph for Rider"
features:
  - title: "The change as a graph"
    text: "One node per C# type your uncommitted change touches (class, record, struct, interface, enum, delegate), one edge per dependency between them, read by Roslyn: inherits, implements, holds, signature, creates, calls, uses. Added in green, removed in red, modified in amber."
  - title: "Laid out like the architecture"
    text: "The types that depend on nothing else in the change sit at the left; what builds on them follows. Each project is a box around its types. Review the change in the order it was built, not in the order git lists the files."
  - title: "Rider's own diff, one click away"
    text: "Clicking a changed type opens Rider's diff of its files, the same diff the Commit view shows. Clicking a dependency shows the changed lines that create it. Selecting files in the Commit view highlights their types in the graph."
  - title: "Stage and unstage from the graph"
    text: "Right-click a type, or the lines of one dependency, to stage or unstage it without leaving the graph. Every node and edge wears its stage: staged, partly staged, unstaged."
  - title: "Filter the noise"
    text: "Find a type by name, hide test projects, hide unchanged neighbours, show changed edges only, pick the edge kinds to draw. The graph follows your edits and keeps the nodes where you moved them; re-layout and fit are one click each."
  - title: "Runs locally, uploads nothing"
    text: "The analyser is bundled with the plugin and runs on your machine with the .NET SDK you already have. Nothing leaves it."
---

AI-assisted workflows produce more code than anyone can comfortably read as a list of files. A git diff shows what
changed; it does not show how the changes depend on each other. The **Diff Graph** tool window draws your uncommitted
C# change as the graph of the types it touches, so you see the shape of a change before you read it. A commit that
looks like twelve scattered files is usually three types and the things that use them.
