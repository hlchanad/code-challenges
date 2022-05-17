class Node {
    value;
    next;

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
 * @param {Node} head1
 * @param {Node} head2
 * @return {Node}
 */
module.exports.mergeSorted = (head1, head2) => {
    let it1 = head1, it2 = head2;
    let result = new Node();
    let resultIt = result;

    while (it1 && it2) {
        if (it1.value < it2.value) {
            resultIt.next = it1;
            it1 = it1.next;
        } else {
            resultIt.next = it2;
            it2 = it2.next;
        }
        resultIt = resultIt.next;
    }

    if (it1) {
        resultIt.next = it1;
    }

    if (it2) {
        resultIt.next = it2;
    }

    return result.next;
}
