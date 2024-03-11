[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/M24O3lId)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no parth from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

### Runtime Analysis of DFS:

To measure how long the Depth-First Search takes to run, we take a look at the number of steps required to check every connection and node in a graph. The time this takes revolves around: how many nodes (V) there are and how many connections (E) there are between those nodes.

### **DFS Time Complexity**:

The worst-case time complexity for DFS is $Θ(V+E)$, indicating a linear relationship with the sum of the graph's vertices and edges.

**Explanation**:

- **Visiting Nodes(V)**: DFS goes through each node once. By keeping track of which nodes we've already visited, we make sure not to check the same node more than once. This part of the process contributes $O(V)$ to the total time since the operation of adding to and checking the visited set has constant time complexity, and this is done for each vertex.
  
- **Exploring Edges(E)**: For every vertex, DFS explores all outgoing edges to traverse the graph. In an adjacency list representation, the total number of explorations across all vertices corresponds to the total number of edges in the graph $E$. Each edge is considered exactly once in an undirected graph (or twice in a directed graph). This exploration contributes $O(E)$ to the total time complexity.
  
- **Overall Complexity**: Since the algorithm sequentially visits vertices and explores edges, the total time complexity combines both, resulting in $O(V + E)$. The notation $Θ(V + E)$ means that, in the worst case scenario, the time it really takes is directly related to the size and complexity of the graph so both the number of nodes and the number of connections between them.

**Space Needed**:

The space DFS needs mainly comes from two things: the memory needed to keep track of which nodes we've visited and the memory used by the computer to manage the recursion (the process of the function calling itself). In the worst case, this could be as much as needing space for every node in the graph, which is $O(V)$. So, the most space it would need is $O(V)$, because of the memory for visited nodes and the recursion.

In simpler terms, DFS's time to run is mostly about how many nodes and connections the graph has. The more there are, the longer it will take. And the amount of computer memory it uses is mostly about how many nodes there are in the graph.

## Bonus

Implement and analyze breadth-first search.

### BFS Time Complexity:
The worst-case time complexity for BFS is also $Θ(V + E)$, so a linear relationship with the number of vertices plus the number of edges in the graph.

**Reasoning**:
- **Processing Vertices(V)**: In BFS, each vertex is visited and processed only once. This ensures no node is checked more than necessary. For each node, adding it and removing it from the queue is quick ($O(1)$ per vertex), making this part of the process $O(V)$ time complexity.
  
- **Checking Edges(E)**: As BFS progresses through each level of the graph, it checks the edges connecting vertices to discover all the adjacent nodes. In an adjacency list representation, the process of exploring these connections across all vertices corresponds to inspecting every edge in the graph, $E$. Therefore, checking all edges contributes $O(E)$ to the overall time complextiy.
  
- **Overall Complexity**: Since BFS consecutively visits all vertices and checks all edges, the combined time complexity is the sum of both contributions, $O(V+E)$. In $Θ(V + E)$ notation, it signifies that BFS's performance is heavily linked to the graph's size and connectivity, thus representing the combined workload that vertices and edges cause.

**Space Complexity**:
The space BFS needs mainly comes from two things: The queue (which helps us keep track of which node to visit next) and the record of which nodes we've already visitied. In the worst case scenario, this could mean we need space for a large number of nodes at once, especially in dense graphs. Therefore, the most space BFS could need is $O(V)$, considering both the queue and the visited record.
