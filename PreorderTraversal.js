// 144. Binary Tree Preorder Traversal
const preorderTraversal = root => {
    if (root === null){
        return [];
    }

    // Initialize stack with root node and an empty array, result - to store values in
    const stack = [root];
    const result = [];
    
    // Loop until stack is empty
    while(stack.length){
        let current = stack.pop();
        result.push(current.val);

        // Push the child nodes onto the stack if values are present
        if(current.right){
            stack.push(current.right);
        }
        if(current.left){
            stack.push(current.left);
        }

    }
    // return the result with the node values
    return result;
}

