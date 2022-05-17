const { Node, isBst } = require('../06-is-bst');

let root;

beforeEach(() => {
    root = new Node(100);

    root.left = new Node(50);
    root.right = new Node(200);

    root.left.left = new Node(20);
    root.left.right = new Node(75);
    root.right.left = new Node(125);
    root.right.right = new Node(350);
});

it('returns true if it is', () => {
    expect(isBst(root)).toBeTruthy();
});

it('returns false if it is not', () => {
    root.right.left.value = 90;
    expect(isBst(root)).toBeFalsy();
});
