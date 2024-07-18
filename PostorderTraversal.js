// 145. Binary Tree Postorder Traversal
const postorderTraversal = root => {
    //
    if (root === null) {
        return [];
    }

    // Initialize stacks to achieve the postorder traversal and a result array to store the values in
    const stack1 = [root];
    const stack2 = [];
    const result = [];

    // Loop until stack is empty
    while (stack1.length > 0) {

        //Pop stack1 and push in stack2
        const node = stack1.pop();
        stack2.push(node);

        // Push left and right children to stack1 before popping and pushing to stack2 to achieve postorder traversal
        if (node.left) {
            stack1.push(node.left);
        }
        if (node.right) {
            stack1.push(node.right);
        }
    }

    // Loop until stack is empty
    // Pop stack2 and push the values to the result array
    while (stack2.length > 0) {
        const node = stack2.pop();
        result.push(node.val);
    }

    // Return the result array in postorder traversal order
    return result;
};