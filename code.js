// Depth-First Search Implementation
function depthFirstSearch(graph, start, target, visited = new Set()) {
    if (start === target) {
        return [start];
    }
    
    visited.add(start);
    const neighbors = graph[start] || [];
    
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            const path = depthFirstSearch(graph, neighbor, target, visited);
            if (path.length) {
                return [start, ...path];
            }
        }
    }
    
    return [];
}


// Bonus Task:
function breadthFirstSearch(graph, start, target) {
    if (start === target) {
        return [start];
    }

    const visited = new Set([start]);
    const queue = [[start]];

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];

        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                const newPath = path.concat(neighbor);
                if (neighbor === target) {
                    return newPath;
                }
                queue.push(newPath);
            }
        }
    }

    return [];
}

module.exports = { depthFirstSearch, breadthFirstSearch }; // Export both functions

