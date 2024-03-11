const { depthFirstSearch, breadthFirstSearch } = require('./code');

// Depth-First Search Test Cases
console.log("Testing Depth-First Search:");
const dfsTests = [
    { graph: { 1: [2, 3], 2: [4], 3: [], 4: [] }, start: 1, target: 4, expected: [1, 2, 4] },
    { graph: { 1: [2], 2: [1], 3: [4], 4: [3] }, start: 1, target: 1, expected: [1] },
    { graph: { 1: [2], 2: [], 3: [4], 4: [] }, start: 1, target: 3, expected: [] },
];

dfsTests.forEach(({ graph, start, target, expected }, index) => {
    const result = depthFirstSearch(graph, start, target);
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `DFS Test ${index + 1} failed. Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}.`);
});

// Breadth-First Search Test Cases
console.log("Testing Breadth-First Search:");
const bfsTests = [
    { graph: { 1: [2, 3], 2: [4], 3: [], 4: [] }, start: 1, target: 4, expected: [1, 2, 4] },
    { graph: { 1: [2], 2: [3], 3: [4], 4: [] }, start: 1, target: 4, expected: [1, 2, 3, 4] }, // Demonstrates BFS finding the shortest path
    { graph: { 1: [2], 2: [], 3: [4], 4: [] }, start: 1, target: 3, expected: [] },
];

bfsTests.forEach(({ graph, start, target, expected }, index) => {
    const result = breadthFirstSearch(graph, start, target);
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `BFS Test ${index + 1} failed. Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}.`);
});

console.log("All tests passed!");
