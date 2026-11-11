---
title: "Laying out the graph: from dagre to ELK"
description: "Why edges crossed and ran over nodes, and what changed when the layout moved to ELK."
date: 2026-11-11
weight: 3
---

The first layout was hard to read: edges crossed and ran over nodes. This note covers the cause and the layout that
replaced it.

<!--more-->

## The cause

- dagre ran once per project, with only that project's inner edges. Edges between projects took no part in any
  crossing reduction.
- The project blocks were stacked in columns in insertion order.
- Every edge was drawn as a direct curve from node to node. No route was computed, so nothing kept an edge off a node.

## One run for the whole graph

The graph is now laid out by ELK's layered algorithm in a single run. Projects and namespaces are parent nodes, and
`elk.hierarchyHandling` is `INCLUDE_CHILDREN`, so an edge between two projects is part of the crossing reduction.
Edges are drawn exactly along the routes ELK returns.

| Decision | Alternative not taken |
|---|---|
| ELK Layered over the whole graph, with projects as parent nodes | dagre in compound mode: a fixed crossing heuristic and no routing around clusters |
| Direction `LEFT`, edges from the dependent to its dependency, so a dependency sits left of its dependents | Direction `RIGHT` and reversing every route before drawing |
| The layout is a parameter of one drawing body, with dagre still selectable | Two drawing bodies behind a toggle |
| A line-style choice (orthogonal, straight, curved) that ELK routes in | One fixed routing |

## Dragging was removed

Nodes and boxes could first be dragged. A dragged node's edges lost their routes and fell back to direct lines, which
brought back the problem the layout had solved. Re-running the layout on a drop returned the node to its computed
place, which made dragging pointless. So dragging was removed: the layout alone places every node, and the page keeps
only the pan and zoom.

The alternative, an own orthogonal router that routes around nodes kept where they were dropped, was not built.

## Still open

The layout's thoroughness and spacing values are first values. They have not been tuned on a large graph.
