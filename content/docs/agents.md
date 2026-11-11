---
title: "Agents and MCP"
description: "Connect an AI agent such as Claude Code to Rider's MCP server, and let it read the graph, move the view and pin notes to explain a change."
weight: 4
---

GitDiffGraph adds its tools to Rider's own MCP server. An AI agent connected to it, such as Claude Code, reads the
graph of the change, moves the view to the types and dependencies it is talking about, and pins notes on them. You
read the explanation where the change is drawn, next to the diff.

{{< themed-picture src="images/features/09-agent-notes.jpg" alt="The graph with an agent's numbered notes on its types and dependencies, and the notes panel beside it" >}}

## Connect an agent

{{% steps %}}

### Enable Rider's MCP server

Settings → Tools → MCP Server. Enable it and connect your agent; the page lists the clients Rider can configure for
you.

### Open the graph

The tools answer only while the GitDiffGraph window is open. With it closed, an agent's call is refused and nothing
is analysed.

### Ask for a walk-through

For example: *"Walk me through this change on the GitDiffGraph graph, starting where it begins."* The agent reads the
graph, focuses the view on what it explains, and pins a note on each step.

{{% /steps %}}

## What the agent can do

| Tool | What it does |
|---|---|
| `gitdiffgraph_get_graph` | Returns every changed type (name, namespace, kind, project, status, layer, files) and every dependency between them (kinds, status) |
| `gitdiffgraph_get_view` | Returns what the window shows: the comparison, the selection, the search, the filters, the shown types and dependencies, the viewport |
| `gitdiffgraph_focus` | Pans and zooms to fit the named types and dependencies |
| `gitdiffgraph_reset_view` | Fits the whole graph |
| `gitdiffgraph_pin_note_on_type` | Pins a note on a type |
| `gitdiffgraph_pin_note_on_dependency` | Pins a note on a dependency |
| `gitdiffgraph_list_notes` | Lists the notes of the shown comparison, each with whether it is stale |
| `gitdiffgraph_remove_note` | Removes one note |
| `gitdiffgraph_clear_notes` | Removes every note of the shown comparison |

A type or a dependency the graph does not hold, or one the filters hide, is refused with the reason, so the agent
does not point at what you cannot see.

## Notes

- Each note is a numbered badge on its type or dependency. The notes are listed, in order, in a panel beside the
  graph, which can be collapsed so it never covers the graph.
- Click a badge to find its note in the panel; click a note to move the view to what it is pinned on.
- Notes are kept per comparison, in the project's `.idea/gitdiffgraph/notes/`. They survive closing Rider.
- When an analysis draws a different graph, the notes are marked stale and listed greyed with the reason. A note on a
  type the filters hide is listed with that reason too; no note is dropped.

## Limits

- The tools work on the project in focus, and only while its GitDiffGraph window is open.
- The plugin uploads nothing. The agent you connect reads the graph through the tools, and may send what it reads to
  its own provider, as it does with your code.
- A licence is needed, as for the rest of the plugin.
