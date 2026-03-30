class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    //x->1, y->1, z->1 count=3
    //if my count is 0 then in my window i will have all the t char in s

    minWindow(s, t) {
        let map = new Map();
        let minWindowSubstring = '';
        let length= Infinity;
        for(let char of t){
            map.set(char, (map.get(char) || 0) +1);
        }
        let count = map.size;
        let left =0;
        let right=0;
        while(right < s.length){
            let rChar = s[right]; //O
            if(map.has(rChar)){
                map.set(rChar, map.get(rChar)-1)
                if(map.get(rChar) === 0) count--;
            }
            right++;
            while(count === 0){
                if(right - left < length ){
                    length = right-left;
                    minWindowSubstring = s.slice(left, right)
                }
                let lChar = s[left];
                if(map.has(lChar)){
                map.set(lChar, map.get(lChar)+1)
                if(map.get(lChar) > 0) count++;
            }
            left++;
            }
        }
        return minWindowSubstring;
    }
}
