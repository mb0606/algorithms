public class BinaryTree<T> {
    private class Node {
        private T data;
        private Node right;
        private Node left;

        public Node(T data) {
            this.data = data;
            this.right = null;
            this.left = null;
        }

    }

    private Node root;

    BinaryTree(T data) {
        root = createLeaf(data);
    }

    public Node createLeaf(T data) {
        Node n = new Node(data);
        return n;
    }

    private void addLeafPrivate(T data, Node current) {
        if (root == null) {
            root = createLeaf(data);
        } else if (current.data < data) {
            
        }
    }

    public void add(T data) {
        addLeafPrivate(data, root);
    }
}