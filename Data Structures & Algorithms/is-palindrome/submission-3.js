class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s){
            return ((s.toLowerCase().charCodeAt() >= 'a'.charCodeAt()  &&   s.toLowerCase().charCodeAt() <= 'z'.charCodeAt()) || 
        (s.toLowerCase().charCodeAt() >= '0'.charCodeAt()  &&  s.toLowerCase().charCodeAt() <= '9'.charCodeAt()))
    }
    isPalindrome(s) {
        let start = 0;
        let end = s.length-1;
        while(start < end){
            if(!this.isValid(s[start])){
                start++;
            } else if(!this.isValid(s[end])){
                end--;
            } else if (this.isValid(s[start]) && this.isValid(s[end])){
                if(s[start].toLowerCase() === s[end].toLowerCase()){
                    start++;
                    end--;
                } else return false;
            }
        }
        return true;
    }
}
