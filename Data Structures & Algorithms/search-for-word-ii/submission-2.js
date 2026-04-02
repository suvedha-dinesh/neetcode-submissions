class TrieNode{
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}



class Solution {

    constructor(){
        this.root = new TrieNode();
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    insert(word){
        let current = this.root;
            for(let w of word){
                if(!current.children.has(w)){
                    current.children.set(w, new TrieNode())
                }
                current = current.children.get(w)
            }
        current.endOfWord = true;
        current.word = word; 
    }
    findWords(board, words) {
        let m = board.length; let n = board[0].length;
        let result=[];
        for(let word of words){
            this.insert(word);
        }
        function dfs(r,c, current){
            if( r <0 || c <0 || r >=m || c>= n || board[r][c] === '#') return;
            let char = board[r][c];
            if(!current.children.has(char)) return;
            current = current.children.get(char);
             if (current.endOfWord) {
                result.push(current.word);
                current.endOfWord = false; // avoid duplicates
            }
            board[r][c] = '#';
            dfs(r+1, c, current);
            dfs(r-1, c, current);
            dfs(r, c+1, current);
            dfs(r, c-1, current);
            board[r][c] = char;
        }

        for(let r=0; r<m; r++){
            for(let c=0; c<n; c++){
                dfs(r, c, this.root)
            }
        }
        return result;
    }
}
