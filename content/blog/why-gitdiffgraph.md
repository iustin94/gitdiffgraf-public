---
title: "Why GitDiffGraph"
description: "The origin of GitDiffGraph, the problem it solves, and what it does about it."
date: 2026-11-11
weight: 1
---

Developers have always had to deal with a lot of information. With AI-assisted coding, the volume of code changes has
grown sharply in the past year, and reviewing them well has become harder. When changes aren't fully understood, the
results are security issues, outages, and more stress and burnout for developers.

I built GitDiffGraph to solve this, first for myself. It gives Rider users an intuitive, visual graph of the code
changes in a Git diff. Developers can see what changed and how the changes connect before they commit, review or merge.

As far as I know, no other plugin visualizes a Git diff as a graph. The closest alternative is NDepend. It is mainly a
Visual Studio tool, expensive for individual developers, and built for large enterprise codebase analysis rather than
Git diffs.

<!--more-->

## The research behind it

This problem is backed by research. In a 2026 ICSE survey of 1,355 professional developers, only about 1 in 10
reviewers considered the default alphabetical file order of diffs to be optimal. More than half said it increases
context switching and review fatigue, and nearly two-thirds worried it could make them miss bugs. Two-thirds asked for
dependency-aware grouping and customizable ordering of changed files. GitDiffGraph delivers this by showing how the
changed files relate to each other, so developers can follow the logic of a change instead of the alphabet.

Source: Md Shamimur Rahman, Zadia Codabux and Chanchal K. Roy,
[Breaking the Alphabet: Rethinking File Ordering in Code Review](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/310/Breaking-the-Alphabet-Rethinking-File-Ordering-in-Code-Review),
ICSE 2026 Research Track; [replication package](https://doi.org/10.5281/zenodo.17634647).

I have found the plugin extremely useful myself, managing several projects and enterprise-level codebases. I hope this
release makes it popular enough to give me the resources to expand it to other languages and IDEs in the JetBrains
ecosystem.

## What it does

GitDiffGraph shows a C# code change in Rider as a graph. It shows which types changed, how they depend on each other,
and how they connect across projects. It works alongside Rider's line-by-line diff.

## Uniqueness

As far as I know, no other tool offers a dependency graph of a Git diff in any IDE, and certainly not in Rider. The
closest tool is NDepend, which serves a different purpose. It focuses on enterprise-scale codebase analysis rather than
individual code changes, and it belongs to the Visual Studio ecosystem. GitDiffGraph fills this gap for Rider users.

## Key use cases

- **AI-generated code:** see every type an agent added, removed or changed, including changes you didn't ask for.
- **Before committing:** review your change and stage types or dependencies straight from the graph.
- **Pull requests:** see what a branch changed since it split from its target branch.
- **Comparisons:** compare any two branches, tags or commits, or the working tree against any of them.

## Main features

- Color-coded graph: green for added, red for removed, amber for modified.
- Types are grouped by project and namespace.
- Selecting a type highlights everything it depends on and everything that depends on it.
- Double-clicking a dependency shows its kind (inherits, implements, calls and so on) and the exact lines that create it.
- Double-clicking a type opens Rider's own diff. The graph and the Commit view follow each other's selection.
- Search and filters, for example hiding test projects or unchanged types.
- Stage or unstage files, or single dependencies, from the graph.

The full list is in [Features](/docs/features).

## AI agent support (MCP)

GitDiffGraph includes an MCP (Model Context Protocol) layer, so AI coding agents can work with the graph directly:

- **Show their changes:** agents can use the graph to present what they changed, so developers see the structure of an
  AI-made change instead of a long list of files.
- **Share code inspections:** agents can show their findings on the graph, right next to the types involved.
- **Annotate for review:** agents can leave notes on types and dependencies, pointing the developer to what needs
  attention.

This turns the graph into a shared review space between the developer and the AI agent. It helps developers keep up
with the growing volume of AI-written code. Setting it up is described in [Agents](/docs/agents).

## Built for the IDE

- Uses Roslyn, the C# compiler, to read dependencies.
- Built into Rider and opened with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd>.

## Privacy and security

- Runs fully on the developer's machine. Nothing is uploaded.
- No telemetry, no usage tracking and no network requests.

## Support and documentation

- Docs, changelog and build notes: this site.
- Public issue tracker: [GitHub Issues](https://github.com/iustin94/gitdiffgraf-public/issues)
- [JetBrains Marketplace page](https://plugins.jetbrains.com/plugin/io.github.iustin94.gitdiffgraph)
