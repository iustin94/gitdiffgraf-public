---
title: "About"
description: "Who builds GitDiffGraph and why."
---

GitDiffGraph is designed, built and maintained by **Iustinian Olaru**.

## Why it exists

A Git diff shows a change line by line, one file at a time. It does not show how the changed types relate: which one
the others build on, which project each sits in, and where a change crosses from one layer into the next. On a change
that spans many files, that order has to be rebuilt in the reader's head.

GitDiffGraph draws that order. It reads both sides of a change with Roslyn, compares the two graphs of types and
dependencies, and draws the difference beside the diff in Rider.

The longer story, with the research behind it, is in [Why GitDiffGraph](/blog/why-gitdiffgraph).

## What is in it

| Part | Built with |
|---|---|
| The analyser | C#, Roslyn, `MSBuildWorkspace`, Git worktrees |
| The graph page | JavaScript, D3, ELK |
| The Rider plugin | Kotlin, the IntelliJ Platform, git4idea |

The design decisions behind each part are written up in the [build notes](/blog).

## Contact

- Site: <a href="{{< param "vendorUrl" >}}">{{< param "vendorUrl" >}}</a>
- GitHub: <a href="{{< param "vendorGitHubUrl" >}}">{{< param "vendorGitHubUrl" >}}</a>
- Bugs and suggestions: [GitHub Issues](https://github.com/iustin94/gitdiffgraf-public/issues/new)
