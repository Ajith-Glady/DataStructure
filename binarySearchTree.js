class Node{
   constructor(value){
      this.value = value
      this.left = null
      this.right = null
   }
}

class binarySearchTree{
   constructor(){
      this.root = null
   }

   isEmpty(){
      return this.root === null
   }

   insert(value){
      const newNode = new Node(value)
      if(this.isEmpty()){
         this.root = newNode
      }else{
         this.insertNode(this.root,newNode)
      }
   }

   insertNode(root,newNode){
      if(newNode.value < root.value){
         if(root.left === null){
            root.left = newNode
         }else{
            this.insertNode(root.left,newNode)
         }
      }else{
         if(root.right === null){
            root.right = newNode
         }else{
            this.insertNode(root.right,newNode)
         }
      }
   }

   search(root,value){
      if(!root){
         return false
      }else{
         if(root.value === value){
            return true
         }else if(value < root.value){
            return this.search(root.left,value)
         }else{
            return this.search(root.right,value)
         }
      }
   }


   // ------------------ Depth First Search --------------- start

   // Preorder traversal

   preorderTraversal(root = this.root){
      if(root){
         console.log(root.value);
         this.preorderTraversal(root.left)
         this.preorderTraversal(root.right)
      }
   }


   // Inorder traversal

   inorderTraversal(root){
      if(root){
         this.inorderTraversal(root.left)
         console.log(root.value);
         this.inorderTraversal(root.right)
      }
   }


   // Post order traversal

   postorderTraversal(root){
      if(root){
         this.postorderTraversal(root.left)
         this.postorderTraversal(root.right)
         console.log(root.value)
      }
   }


   // ------------------- Depth First Search ---------------------- end

   // -------------------- Breadth First Search ------------------ Start


   level10Order(){
      const queue = []
      queue.push(this.root)
      while(queue.length){
         let current = queue.shift()
         console.log(current.value);
         if(current.left){
            queue.push(current.left)
         }
         if(current.right){
            queue.push(current.right)
         }
      }
   }


   // -------------------- Breadth First Search ------------------ End


   // minimum value node find

   min(root){
      if(!root.left){
         return root.value
      }else{
         return this.min(root.left)
      }
   }

   max(root){
      if(!root.right){
         return root.value
      }else{
         return this.max(root.right)
      }
   }



   delete(value){
      this.root = this.deleteNode(this.root,value)
   }
   deleteNode(root,value){
      if(root === null){
         return root
      }
      if(value < root.value){
         root.left = this.deleteNode(root.left,value)
      }else if(value > root.value){
         root.right = this.deleteNode(root.right,value)
      }else{
         if(!root.left && !root.right){
            return null
         }
         if(!root.left){
            return root.right
         }else if(!root.right){
            return root.left
         }
         root.value = this.min(root.right)
         root.right = this.deleteNode(root.right,root.value)
      }
      return root
   }

   
}

const tree = new binarySearchTree()
// console.log(tree.isEmpty());

tree.insert(10)
tree.insert(15)
tree.insert(8)
tree.insert(25)
tree.insert(11)
tree.insert(1)
// console.log(tree.isEmpty());
// console.log(tree.search(tree.root,3));


// console.log('preorder traversal');
// tree.preorderTraversal(tree.root)

// console.log('inorder traversal');
// tree.inorderTraversal(tree.root)

// console.log('post order traversal');
// tree.postorderTraversal(tree.root)

// console.log('Breadth first search :');
// tree.level10Order()

// console.log('smallest :',tree.min(tree.root));
// console.log('largest :',tree.max(tree.root));


// console.log('>>>>>>>>');
// tree.preorderTraversal()
// tree.delete(10)
// console.log('>>>>>>>>');
// tree.preorderTraversal()

console.log(tree.min(tree.root));