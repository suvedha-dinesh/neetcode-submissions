class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    // A - 0, B - 1, C - 1
    minWindow(s, t) {
        let left =0;
        let right =0;
        let map = new Map();
        let minLength = Infinity;
        let str ='';

        for(let char of t){
            map.set(char, (map.get(char) || 0 ) + 1);
        }
        let count= map.size;
        while(right < s.length){
            let rChar = s[right];
            if(map.has(rChar)){
                map.set(rChar, map.get(rChar) -1);
                if(map.get(rChar) === 0) count--;
            }
            right++;

            while(count === 0){
                if(right-left < minLength){
                    minLength = right-left;
                    str = s.slice(left, right);
                }
                let lChar = s[left];
                if(map.has(lChar)){
                    map.set(lChar, map.get(lChar) + 1);
                    if(map.get(lChar) > 0) count++;
                }
                left++;
            }
        }
        return str;
    }
}
