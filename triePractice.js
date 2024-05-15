class TrieNode{
   constructor(){
      this.children = {}
      this.isEndofWord = false
      this.word = []
   }
}

class Trie{
   constructor(){
      this.root = new TrieNode()
   }
   // insert(word){
   //    let current = this.root
   //    for(let char of word){
   //       if(!current.children[char]){
   //          current.children[char] = new TrieNode()
   //       }
   //       current = current.children[char]
   //       current.word.push(word)
   //    }
   //    current.isEndOfWord = true
   // }

   insert(word){
      let current = this.root
      for(let char of word){
         if(!current.children[char]){
            current.children[char] = new TrieNode()
         }
         current = current.children[char]
         current.word.push(word)
      }
      current.isEndofWord = true
   }

   search(prefix){
      let current = this.root
      for(let char of prefix){
         if(!current.children[char]){
            return []
         }
         current = current.children[char]
      }
      return current.word
   }

   findLongestWord(){
      let logestWord = ''
      let second=''
      const dfs = (node,currentWord) => {
         if(node.isEndofWord){
            if(currentWord.length > logestWord.length){
               second=logestWord
               logestWord = currentWord
            }else if(currentWord.length>second.length){
               second=currentWord
            }
         }
         for(let char in node.children){
            const childNode = node.children[char]
            dfs(childNode,currentWord+char)
         }
      }
      dfs(this.root,'')
      return logestWord
   }

   secondLongest(){
      let longestWord = ''
      let second = ''
      const dfs = (node,currentWord) => {
         if(node.isEndofWord){
            if(currentWord.length > longestWord.length){
               second = longestWord
               longestWord = currentWord
            }else if(currentWord.length > second.length){
               second = currentWord
            }
         }

         for(let char in node.children){
            let childNode = node.children[char]
            dfs(childNode,currentWord + char)
         }
      }
      dfs(this.root,'')
      return second
   }
}

const trie = new Trie()

trie.insert('ajith')
trie.insert('apple')
trie.insert('application')
trie.insert('therakathinkal')

// console.log(trie.search('apple'));
// console.log(trie.search('app'));
// console.log(trie.search('ajith'));
console.log(trie.search('a'));
// console.log(trie.search('abc'));
// console.log(trie.search('appli'));

console.log(trie.findLongestWord());
console.log(trie.secondLongest());