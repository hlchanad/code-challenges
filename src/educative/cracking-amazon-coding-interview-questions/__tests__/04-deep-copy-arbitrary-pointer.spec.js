const { Node, deepCopyArbitraryPointer } = require('../04-deep-copy-arbitrary-pointer');

let nodes;

beforeEach(() => {
    nodes = [
        new Node(1),
        new Node(2),
        new Node(3),
        new Node(4),
    ];

    nodes[0].next = nodes[1];
    nodes[1].next = nodes[2];
    nodes[2].next = nodes[3];

    nodes[0].arbitrary = nodes[3];
    nodes[1].arbitrary = nodes[2];
    nodes[2].arbitrary = nodes[1];
    nodes[3].arbitrary = nodes[0];
});

it('copies deeply', () => {
    const result = deepCopyArbitraryPointer(nodes[0]);

    nodes.forEach((node) => node.value += 10);

    expect(nodes[0].toList()).toMatchObject([11, 12, 13, 14]);
    expect(result.toList()).toMatchObject([1, 2, 3, 4]);

    expect(result.arbitrary.value).toBe(4);
    expect(result.next.arbitrary.value).toBe(3);
    expect(result.next.next.arbitrary.value).toBe(2);
    expect(result.next.next.next.arbitrary.value).toBe(1);
});

it('returns null if head is also null', () => {
    expect(deepCopyArbitraryPointer(null)).toBeNull();
});
