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
 * @return {boolean}
 */
module.exports.isBst = (root) => {
    /**
     *
     * @param {Node} node
     * @param {number} min
     * @param {number} max
     * @return {boolean}
     */
    const isBstNode = (node, min, max) => {
        if (!node) {
            return true;
        }

        if (node.value <= min || node.value >= max) {
            return false;
        }

        return isBstNode(node.left, min, node.value) &&
            isBstNode(node.right, node.value, max);
    };

    return isBstNode(root, Number.MIN_VALUE, Number.MAX_VALUE);
};
