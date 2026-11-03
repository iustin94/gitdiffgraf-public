---
title: "Diff Graph for Rider"
features:
  - title: "The change as a graph"
    text: "One node per C# type your uncommitted change touches, one edge per dependency between them, read by Roslyn: inherits, implements, holds, signature, creates, calls, uses. Added in green, removed in red, modified in amber."
  - title: "Layered left to right"
    text: "The types everything else builds on sit at the left; what depends on them follows. Review the change in the order it was built, not in the order git lists the files."
  - title: "Rider's own diff, one click away"
    text: "Clicking a changed type opens Rider's diff of its files, the same diff the Commit view shows. Selecting files in the Commit view highlights them in the graph."
  - title: "Stage and unstage from the graph"
    text: "Move a type, or the lines of one dependency, between the working tree and the index without leaving the graph. Staged-only limits the graph and the diff to what is staged."
  - title: "Runs locally, uploads nothing"
    text: "The analyser is bundled with the plugin and runs on your machine with the .NET SDK you already have. Nothing leaves it."
---

The **Diff Graph** tool window shows what your change really is: not a list of files, but the types they declare and
how those types depend on each other. A commit that looks like twelve scattered files is usually three types and the
things that use them.
