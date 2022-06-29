/**
 * @param {number[][]} graph
 * @return {number[]}
 */
module.exports.eventualSafeNodes = function (graph) {
    // if any child is not a safe node, it will never be a safe node

    const safeNodes = new Array(graph.length).fill(false);
    const visited = new Array(graph.length).fill(false);

    const isSafeNode = function (index) {
        if (visited[index]) {
            return safeNodes[index];
        }

        visited[index] = true;

        const children = graph[index];

        for (let childIndex = 0; childIndex < children.length; childIndex++) {
            if (!isSafeNode(children[childIndex])) {
                return false;
            }
        }

        safeNodes[index] = true;
        return true;
    };

    // if all children are safe node, it is a safe node

    const result = [];

    for (let i = 0; i < graph.length; i++) {
        if (isSafeNode(i)) {
            result.push(i);
        }
    }

    return result;
};
