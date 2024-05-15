class TrieNode {
   constructor() {
      this.children = {};
      this.isEndOfWord = false;
      this.words = []; // Store words ending at this node for autocomplete
   }
}

class Trie {
   constructor() {
      this.root = new TrieNode();
   }

   insert(word) {
      let current = this.root;
      for (let char of word) {
         if (!current.children[char]) {
            current.children[char] = new TrieNode();
         }
         current = current.children[char];
         current.words.push(word); // Update words list for autocomplete
      }
      current.isEndOfWord = true;
   }

   autocomplete(prefix) {
      let current = this.root;
      for (let char of prefix) {
         if (!current.children[char]) {
            return [];
         }
         current = current.children[char];
      }
      return current.words;
   }
}

// Example usage of Trie for autocomplete:
const trie = new Trie();
trie.insert("apple");
trie.insert("apples");
trie.insert("banana");
trie.insert("orange");
console.log(trie.autocomplete("app")); // Output: ["apple", "apples"]
console.log(trie.autocomplete("ban")); // Output: ["banana"]
console.log(trie.autocomplete("ora")); // Output: ["orange"]
console.log(trie.autocomplete("xyz")); // Output: []
