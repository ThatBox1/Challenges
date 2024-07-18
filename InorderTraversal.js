// 94. Binary Tree Inorder Traversal
const inorderTraversal = root => {
    if(root === null){
        return [];
    }

    // Initialize stack and an empty array, result - to store values in
    const stack = [];
    const result = [];
    let current = root;

    // Loop until stack is empty
    while (current !== null || stack.length > 0) {
        while (current !== null) {
            // Push all the left children to stack before moving on to the next
            stack.push(current);
            current = current.left;
        }
        // Pop the top item from stack and move to the right child
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    // Return the final result in Inorder Traversal
    return result;
}