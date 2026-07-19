class WordDictionary {
    constructor() {
        this.store = [];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        this.store.push(word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        for (let w of this.store){
            let i=0;
            if(w.length !== word.length) continue;
            while(i < w.length){
                if(w[i] === word[i] || word[i] === '.'){
                    i++;
                } else break;
            }
            if(i === w.length) return true;
        }
        return false;
    }
}
