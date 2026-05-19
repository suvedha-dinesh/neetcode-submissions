class Trie{
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;
        for(let w of word){
            if(!current.children.has(w)){
                current.children.set(w, new Trie());
            }
            current = current.children.get(w);
        }
        current.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        
        let current = this.root;
        for(let w of word){
            if(!current.children.has(w)){
                return false;
            }
            current = current.children.get(w);
        }
        return current.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        for(let w of prefix){
            if(!current.children.has(w)){
                return false;
            }
            current = current.children.get(w);
        }
        return true;
    }
}
