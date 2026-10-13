class TrieNode{
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let current = this.root;
        for(let w of word){
            if(!current.children.has(w)){
                current.children.set(w, new TrieNode())
            }
            current = current.children.get(w);
        }
        current.endOfWord = true;
        current.word = word;
    }

    findWords(board, words) {
        let m = board.length;
        let n = board[0].length;
        let result =[];

        for(let w of words){
            this.insert(w);
        }

        function dfs(r,c,current){
            if(r <0 ||c <0 || r >=m || c >=n || board[r][c] === '#') return;
            if(!current.children.has(board[r][c])) return;
           current = current.children.get(board[r][c]);
           if(current.endOfWord){
            result.push(current.word)
            current.endOfWord = false;
           }
           let visited = board[r][c];
           board[r][c] = '#';
            dfs(r+1, c, current);
            dfs(r, c-1, current);
            dfs(r-1, c, current);
            dfs(r, c+1, current);
            board[r][c] = visited;
        }

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                dfs(r, c, this.root);
            }
        }
        return result;
    }
}
