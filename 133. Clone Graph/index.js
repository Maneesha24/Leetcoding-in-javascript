/**
 * @author maneeshavenigalla
 * Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph. Each
 * node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * @param {Node} node
 * @return {Node}
 */
 class GraphNode {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};

var cloneGraph = function (node) {
    if(!node) {
        return null;
    }

    let graphMap = new Map();

    const traverse = (node) => {
        if(graphMap.has(node)) {
            return graphMap.get(node);
        }

        let newNode = new GraphNode(node.val);
        graphMap.set(node, newNode);

        for(const neighbor of node.neighbors) {
            newNode.neighbors.push(traverse(neighbor));
        }
        return newNode;
    }

    return traverse(node);
};

module.exports = cloneGraph;