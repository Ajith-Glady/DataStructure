class Node{
   constructor(value){
      this.value = value
      this.left = null
      this.right = null
   }
}

class Tree{
   constructor(){
      this.root = null
   }

   insert(value){
      const node = new Node(value)
      if(this.root === null){
         this.root = node
      }else{
         this.insertNode(node,this.root)
      }
   }

   insertNode(node,root){
      if(node.value < root.value){
         if(!root.left){
            root.left = node
         }else{
            this.insertNode(node,root.left)
         }
      }else{
         if(!root.right){
            root.right = node
         }else{
            this.insertNode(node,root.right)
         }
      }
   }

   preOrder(root = this.root){
      if(root){
         console.log(root.value);
         this.preOrder(root.left)
         this.preOrder(root.right)
      }
   }

   inOrder(root = this.root){
      if(root){
         this.inOrder(root.left)
         console.log(root.value);
         this.inOrder(root.right)
      }
   }

   postOrder(root = this.root){
      if(root){
         this.postOrder(root.left)
         this.postOrder(root.right)
         console.log(root.value);
      }
   }

   
   // check the tree is BST or not ----------------------  >>

   validateBST(root){
      return this.isValidBST(root,-Infinity,Infinity) 
   }
   isValidBST(node,min,max){
      if(!node){
         return true
      }
      if(min >= node.value || max <= node.value){
         return false
      }
      return this.isValidBST(node.left,min,node.value) && this.isValidBST(node.right , node.value , max)
   }


   // find the maximum depth of the given tree   ------------------  ------------ --------
   maxDepth(node){
      if(!node){
         return 0
      }

      const leftDepth = this.maxDepth(node.left)
      const rightDepth = this.maxDepth(node.right)

      return Math.max(leftDepth,rightDepth)+1;
   }

   findMaxDepth(){
      return this.maxDepth(this.root)
   }


   // Lowest common ancestor ---------------------- --------------- ------------ -------- ------ - -   - -  

   findLCA(num1,num2,node){
      if((num1 < node.value && num2 > node.value) || (num1 > node.value && num2 < node.value)){
         return node.value
      }
      if(num1 < node.value && num2 < node.value){
         return this.findLCA(num1,num2,node.left)
      }
      if(num1 > node.value && num2 > node.value){
         return this.findLCA(num1,num2,node.right)
      }
   }
   checkLCA(num1,num2){
      return this.findLCA(num1,num2,this.root)
   }

   //-----------


}

const tree = new Tree()

tree.insert(10)
tree.insert(20)
tree.insert(8)
tree.insert(28)
tree.insert(1)
tree.insert(11)
// tree.root.left.right = new Node(19)

console.log(tree.checkLCA(8,20));
console.log(tree.checkLCA(11,28));
console.log(tree.checkLCA(1,28));

// console.log('BST ??  :',tree.validateBST(tree.root));

// console.log(tree.findMaxDepth());
// tree.insert(30)
// tree.insert(35)
// tree.insert(45)
// console.log(tree.findMaxDepth());
// tree.insert(5)
// tree.insert(2)
// tree.insert(3)
// tree.insert(4)
console.log(tree.findMaxDepth());

// tree.preOrder()
// tree.inOrder()
// tree.postOrder()
// console.log('root node :',tree.root);