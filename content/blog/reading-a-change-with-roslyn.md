---
title: "Reading a change with Roslyn"
description: "How both sides of a Git change become two graphs of types, and how the working tree is cached like a commit."
date: 2026-11-11
weight: 2
---

GitDiffGraph draws a change as the types it touches and the dependencies between them. That needs a graph of the code
before the change and one after it. This note covers how the two are built.

<!--more-->

## Two sides, two graphs

1. `git diff` lists the changed files and their hunks.
2. Each side is checked out into a temporary worktree (`git worktree add --detach`), so the user's checkout is never
   touched.
3. The solution is restored and loaded with Roslyn's `MSBuildWorkspace`.
4. A symbol graph is built per side: the types declared in the repository and the dependencies between them.
5. The two graphs are compared. A type or dependency on one side only is added or removed; a type is modified when a
   changed line falls inside it or its members differ.

A dependency has one of seven kinds, read from the semantic model:

| Kind | Meaning |
|---|---|
| inherits | a base class |
| implements | an interface |
| holds | the type of a field or property |
| signature | a parameter or return type |
| creates | a `new` expression |
| calls | a method call in a body |
| uses | a type mentioned in a body |

Only the projects that hold changed files are compiled. Compiling the whole solution is an option, not the default,
because MSBuild evaluation and compilation are where almost all the time goes.

## The working tree as a commit

A commit's graph is cached under its hash. The working tree has no hash, and at first its graph was rebuilt on every
run.

The fix is to give it one. The index is copied to a temporary index, the working tree is staged into the copy
(tracked and untracked files, `.gitignore` respected), `git write-tree` produces a tree and `git commit-tree` a commit
that no ref points at. The real index, `HEAD` and the branch stay where they are.

| Decision | Alternative not taken |
|---|---|
| Key the working tree by a Git commit object built from a copy of the index | Hash the files directly, which would be a second definition of "the working tree" beside Git's |

Two results follow: an unchanged working tree is read from the cache, across a restart too, and untracked files are
part of the change.

## Keeping the solution open

In Rider the analyser runs as one long-lived process. It keeps the workspace open and answers one JSON request per
line. After an edit it replaces the text of the changed documents in the open solution (`Solution.WithDocumentText`)
and rebuilds the graph, so MSBuild is not evaluated again and Roslyn reuses every unchanged document. A changed
project file, or an added or deleted C# file, reloads the workspace, because a text update cannot express it.

## Limits

- C# only.
- A dependency Roslyn cannot resolve, such as a package that did not restore, is missing from the graph.
- Both sides must load: a commit that does not restore gives no graph.
