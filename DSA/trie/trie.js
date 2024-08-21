// Trie is type of k-array tree (which can have k number of children)
// search || insert ||  = o(L) that is length of word which is more better and helps for fast search
// In a trie each word is stored as characters in each node in each level. 
// here prefix is not repeated


class TireNode{
    constructor(){
        this.children ={}
        this.isEOW =false
    }
}
class Tire{
    constructor(){
        this.root = new TireNode()
    }

    insert(word){
        let node =this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]= new TireNode()
            }
            node = node.children[char]
        }
        
        node.isEOW = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEOW
    }
    
    startwithPrefix(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
       
        return node.isEOW
    }
    _findAllWords(node, prefix) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (let char in node.children) {
            words = words.concat(this._findAllWords(node.children[char], prefix + char));
        }
        return words;
    }
}

const trie = new Tire()
trie.insert("apple");
console.log(trie.search("apple"));   
console.log(trie.search("app"));     
console.log(trie.startwithPrefix("app")); 
trie.insert("app");
console.log(trie.search("app"));     


// =================================================

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Find words with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        return this._findAllWords(node, prefix);
    }

    // Helper function to find all words starting from a given node
    _findAllWords(node, prefix) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (let char in node.children) {
            words = words.concat(this._findAllWords(node.children[char], prefix + char));
        }
        return words;
    }
}


function getSuggestions(trie, prefix) {
    return trie.startsWith(prefix);
}

// Example usage
const tri = new Trie();
tri.insert("apple");
tri.insert("app");
tri.insert("application");
tri.insert("apt");
tri.insert("bat");
tri.insert("batch");
tri.insert("batter");

console.log(getSuggestions(tri, "app"));  // ["app", "apple", "application"]
console.log(getSuggestions(tri, "bat"));  // ["bat", "batch", "batter"]
console.log(getSuggestions(tri, "cat"));  // []






















