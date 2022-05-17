class Node {
    value;
    next;
    arbitrary;

    constructor(value) {
        this.value = value;
    }

    toList() {
        let it = this;
        const result = [];

        while (it) {
            result.push(it.value);
            it = it.next;
        }

        return result;
    }
}
module.exports.Node = Node;

/**
 *
 * @param {Node} head
 * @return {Node}
 */
module.exports.deepCopyArbitraryPointer = (head) => {
    const map = new Map();

    const result = new Node();
    let resultIt = result;

    let it = head;

    while (it) {
        const node = new Node(it.value)
        map.set(it, node);

        resultIt.next = node;
        resultIt = resultIt.next;

        it = it.next;
    }

    // assign arbitrary
    it = head;
    let newIt = result.next;
    while (it) {
        if (it.arbitrary) {
            newIt.arbitrary = map.get(it.arbitrary);
        }

        it = it.next;
        newIt = newIt.next;
    }

    return result.next ?? null;
}
