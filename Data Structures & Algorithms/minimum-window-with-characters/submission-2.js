class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let minWindow = '';
        let minLength = Infinity;
        let start =0;
        let end =0;
        let map = new Map();
        for(let char of t){
            map.set(char, (map.get(char) ||0 ) + 1 );
        }
        let count = map.size;
        while(end < s.length){
            let rChar = s[end];
            if(map.has(rChar)){
                map.set(rChar, map.get(rChar) - 1);
                if(map.get(rChar) === 0) count--;
            }
            end++;

            while(count === 0){
                let lChar = s[start];

                if(end-start < minLength){
                    minLength = end-start;
                    minWindow = s.slice(start, end)
                }

                if(map.has(lChar)){
                map.set(lChar, map.get(lChar) + 1);
                if(map.get(lChar) > 0) count++;
               }
               start++;
            
            }
        }
        return minWindow;
    }
}
