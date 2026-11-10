---
title: "How it works"
weight: 2
---

Each side of the change is checked out into a temporary worktree, the solution is restored and loaded by Roslyn, and a
symbol graph is built per side: the types in the repository and the dependencies between them. The two graphs are
compared and the difference is drawn. A side's graph is cached by content, so an unchanged working tree is read from
the cache. Only the projects holding changed files are compiled.

## Screenshots

![The change as a graph](/images/screenshots/01-the-change-as-a-graph.png)
![One type and what depends on it](/images/screenshots/02-one-type-and-what-depends-on-it.png)
![The same diff as the Commit view](/images/screenshots/03-the-same-diff-as-the-commit-view.png)
![Stage from the graph](/images/screenshots/04-stage-from-the-graph.png)
![The graph settings](/images/screenshots/05-the-graph-settings.png)

## Limits

- C# only. Other changed files are listed with their hunks but have no node.
- A dependency Roslyn cannot resolve (a package that did not restore, generated code not on disk) is missing from the
  graph.
- Both sides must load: a commit that does not restore gives no graph.

Hit a limit that blocks you? [Tell us on GitHub](https://github.com/iustin94/gitdiffgraf-public/issues/new).
