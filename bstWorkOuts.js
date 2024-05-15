// find the closest value of given number


// class TreeNode {
//    constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//    }
// }


// function closestValueInBST(root, target) {
//    let closest = root.value;
//    function traverse(node) {
//       if (!node) return;

//       if (Math.abs(node.value - target) < Math.abs(closest - target)) {
//          closest = node.value;
//       }

//       if (target < node.value) {
//          traverse(node.left);
//       } else {
//          traverse(node.right);
//       }
//    }
//    traverse(root);

//    return closest;
// }

// // Example usage:
// const bstRoot = new TreeNode(10);
// bstRoot.left = new TreeNode(5);
// bstRoot.right = new TreeNode(15);
// bstRoot.left.left = new TreeNode(2);
// bstRoot.left.right = new TreeNode(7);
// bstRoot.right.left = new TreeNode(12);
// bstRoot.right.right = new TreeNode(20);

// const targetValue = 9;
// const closestValue = closestValueInBST(bstRoot, targetValue);
// console.log(`Closest value to ${targetValue} in BST is: ${closestValue}`);






// chek given tree BST or not

class TreeNode {
   constructor(value) {
       this.value = value;
       this.left = null;
       this.right = null;
   }
}

function isValidBST(root) {
   function inorderTraversal(node, prev) {
       if (!node) return true;

       if (!inorderTraversal(node.left, prev)) {
           return false;
       }
       if (prev !== null && node.value <= prev) {
           return false;
       }
       prev = node.value;
       return inorderTraversal(node.right, prev);
   }

   return inorderTraversal(root, null);
}

// Example usage:
const bstRoot = new TreeNode(10);
bstRoot.left = new TreeNode(5);
bstRoot.right = new TreeNode(15);
bstRoot.left.left = new TreeNode(2);
bstRoot.left.right = new TreeNode(7);
bstRoot.right.left = new TreeNode(12);
bstRoot.right.right = new TreeNode(20);

console.log("Is the tree a valid BST?", isValidBST(bstRoot)); // Output: true
