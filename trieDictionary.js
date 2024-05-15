// class TrieNode {
//    constructor() {
//       this.children = {};
//       this.isEndOfWord = false;
//    }
// }

// class WordDictionary {
//    constructor() {
//       this.root = new TrieNode();
//    }

//    addWord(word) {
//       let current = this.root;
//       for (let char of word.toLowerCase()) {
//          if (!current.children[char]) {
//             current.children[char] = new TrieNode();
//          }
//          current = current.children[char];
//       }
//       current.isEndOfWord = true;
//    }

//    search(word) {
//       return this.searchRecursive(word.toLowerCase(), this.root);
//    }

//    searchRecursive(word, node) {
//       for (let i = 0; i < word.length; i++) {
//          const char = word[i];
//          if (char === ".") {
//             for (let key in node.children) {
//                if (this.searchRecursive(word.substring(i + 1), node.children[key])) {
//                   return true;
//                }
//             }
//             return false;
//          } else {
//             if (!node.children[char]) {
//                return false;
//             }
//             node = node.children[char];
//          }
//       }
//       return node.isEndOfWord;
//    }
// }

// // Example usage of WordDictionary:
// const wordDictionary = new WordDictionary();
// wordDictionary.addWord("apple");
// wordDictionary.addWord("banana");
// console.log(wordDictionary.search("apple")); // Output: true
// console.log(wordDictionary.search("banana")); // Output: true
// console.log(wordDictionary.search("orange")); // Output: false
// console.log(wordDictionary.search("ban.na")); // Output: true (wildcard search)
