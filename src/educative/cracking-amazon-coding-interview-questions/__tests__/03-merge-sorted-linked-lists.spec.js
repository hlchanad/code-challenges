const { Node, mergeSorted } = require('../03-merge-sorted-linked-lists');

let head1, head2;

beforeEach(() => {
    head1 = new Node(4);
    head1.next = new Node(8);
    head1.next.next = new Node(15);
    head1.next.next.next = new Node(19);

    head2 = new Node(7);
    head2.next = new Node(9);
    head2.next.next = new Node(10);
    head2.next.next.next = new Node(16);
});

it('merges two lists', () => {
    const result = mergeSorted(head1, head2);
    expect(result.toList()).toMatchObject([4, 7, 8, 9, 10, 15, 16, 19]);
});
