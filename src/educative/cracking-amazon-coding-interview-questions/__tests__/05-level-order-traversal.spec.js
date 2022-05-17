const { Node, levelOrderTraversal } = require('../05-level-order-traversal');

let root;

beforeEach(() => {
    root = new Node(100);

    root.left = new Node(50);
    root.right = new Node(200);

    root.left.left = new Node(25);
    root.left.right = new Node(75);
    root.right.right = new Node(350);
});

it('returns array of values grouped by levels', () => {
    const result = levelOrderTraversal(root);

    expect(result).toMatchObject([[100], [50, 200], [25, 75, 350]]);
});
