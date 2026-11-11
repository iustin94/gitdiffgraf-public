---
title: "Staging from the graph"
description: "How a right-click on a type or a dependency stages exactly its lines, and why the plugin owns every stage."
date: 2026-11-11
weight: 4
---

In Rider, a right-click on a changed type or dependency stages or unstages it, and the graph shows what is staged.
This note covers how a graph element maps to lines in the index.

<!--more-->

## What moves

| Element | What is staged |
|---|---|
| A type | The changed files that declare it, whole |
| A dependency | Only the change blocks that hold its changed occurrences |

A change block is a run of adjacent changed lines. A dependency was first built to move its files whole; that staged
far more than the line the user pointed at, and was corrected.

## Moving lines, not files

Staging a file is Rider's own operation, so the Commit view sees it as its own. Staging part of a file is not
available as an operation, so the plugin writes the index itself:

1. Read the file's `HEAD`, index and working-tree text.
2. Diff `HEAD` against the index and the index against the working tree with Rider's `ComparisonManager`.
3. Carry the dependency's lines through those diffs into index lines.
4. Write the new blob into the index with git4idea's `GitIndexUtil`.

| Decision | Alternative not taken |
|---|---|
| Compute the new index text and write it as a blob | `git apply --cached` with a hand-built patch |
| Read and write text as ISO-8859-1, so every byte survives the round trip | The file's detected charset, which is lossy when the detection is wrong |
| A move that covers every block of a file becomes the whole-file operation | Writing an empty blob for a deleted file |

## One home for the stage

The stage of a type or dependency (staged, partly staged, unstaged) is computed in the plugin from Rider's
`GitStageTracker`. The page sends which files and lines each element covers, and the plugin answers with each
element's stage on load and on every tracker update.

The alternative was to send file stages to the page and combine them in JavaScript. That would put the same rules in
two languages. An element whose stage the plugin cannot tell is left out and shown as unknown.

The analyser takes no part in this: reporting stages from it would mean a re-analysis after every stage move.
