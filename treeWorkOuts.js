// find the hight of a binary tree     -----------------------------------------


// class TreeNode {
//    constructor(value) {
//        this.value = value;
//        this.left = null;
//        this.right = null;
//    }
// }

// function treeHeight(root) {
//    if (!root) {
//        return 0;
//    }

//    const leftHeight = treeHeight(root.left);
//    const rightHeight = treeHeight(root.right);

//    return 1 + Math.max(leftHeight, rightHeight);
// }


// const treeRoot = new TreeNode(1);
// treeRoot.left = new TreeNode(2);
// treeRoot.right = new TreeNode(3);
// treeRoot.left.left = new TreeNode(4);
// treeRoot.left.right = new TreeNode(5);

// console.log("Height of the tree:", treeHeight(treeRoot));




// Check if two binary trees are identical      --------------------------------------

// class TreeNode {
//    constructor(value) {
//        this.value = value;
//        this.left = null;
//        this.right = null;
//    }
// }

// function areIdenticalTrees(root1, root2) {
//    if (!root1 && !root2) {
//        return true;
//    }

//    if (!root1 || !root2 || root1.value !== root2.value) {
//        return false;
//    }

//    return (
//        areIdenticalTrees(root1.left, root2.left) &&
//        areIdenticalTrees(root1.right, root2.right)
//    );
// }


// const tree1 = new TreeNode(1);
// tree1.left = new TreeNode(2);
// tree1.right = new TreeNode(3);

// const tree2 = new TreeNode(1);
// tree2.left = new TreeNode(2);
// tree2.right = new TreeNode(3);

// console.log("Are trees identical?", areIdenticalTrees(tree1, tree2)); // Output: true




// find the lowest common ancestor   ---------------------------------------------

class TreeNode {
   constructor(value) {
       this.value = value;
       this.left = null;
       this.right = null;
   }
}

function lowestCommonAncestor(root, p, q) {
   if (!root || root === p || root === q) {
       return root;
   }

   if (p.value < root.value && q.value < root.value) {
       return lowestCommonAncestor(root.left, p, q);
   } else if (p.value > root.value && q.value > root.value) {
       return lowestCommonAncestor(root.right, p, q);
   } else {
       return root;
   }
}


const bstRoot = new TreeNode(6);
bstRoot.left = new TreeNode(2);
bstRoot.right = new TreeNode(8);
bstRoot.left.left = new TreeNode(0);
bstRoot.left.right = new TreeNode(4);
bstRoot.right.left = new TreeNode(7);
bstRoot.right.right = new TreeNode(9);

const node1 = bstRoot.left;
const node2 = bstRoot.right;

const lcaNode = lowestCommonAncestor(bstRoot, node1, node2);
console.log("Lowest Common Ancestor:", lcaNode.value); // Output: 6
