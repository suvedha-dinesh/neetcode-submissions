class TrieNode{
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;
        for(let w of word){
            if(!current.children.has(w)){
                current.children.set(w, new TrieNode());
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
        function dfs(i, current){
            if(i === word.length) return current.endOfWord;
            let char = word[i];
            if(char === '.'){
                for(let c of current.children.values()){
                    if(dfs(i+1, c)) return true;
                }
                return false;
            } else {
                if(!current.children.has(char)){
                    return false;
                }
                return dfs(i+1, current.children.get(char));
            }

        }
       return dfs(0, this.root)
    }
}
