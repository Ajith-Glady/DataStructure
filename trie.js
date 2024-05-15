class TrieNode{
   constructor(){
      this.children = {}
      this.isEndOfWord = false
   }
}

class Trie{
   constructor(){
      this.root = new TrieNode()
   }
   insert(word){
      let currentNode = this.root
      for(let char of word){
         if(!currentNode.children[char]){
            currentNode.children[char] = new TrieNode()
         }
         currentNode = currentNode.children[char]
      }
      currentNode.isEndOfWord = true      // Setting this is the end of the word
   }

   search(word){
      let currentNode = this.root
      for(let char of word){
         if(!currentNode.children[char]){
            return false
         }
         currentNode = currentNode.children[char]
      }
      return currentNode.isEndOfWord
   }


}

const trie = new Trie()
trie.insert('apple')
trie.insert('apply')
trie.insert('malayalam')
trie.insert('ajith')

console.log(trie.search('ajith'));
console.log(trie.search('app'));
console.log(trie.search('apple'));
console.log(trie.search('apply'));
console.log(trie.search('banana'));