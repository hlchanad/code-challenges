class Node {
    value;
    left;
    right;

    constructor(value) {
        this.value = value;
    }
}
module.exports.Node = Node;

/**
 *
 * @param {Node} root
 * @return {number[]}
 */
module.exports.levelOrderTraversal = (root) => {
    let result = [];
    let queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(level);
    }

    return result;
}
