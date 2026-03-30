class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        for(let i=0; i<temperatures.length; i++){
            for(let j=i+1; j<temperatures.length; j++){
                if(temperatures[j] > temperatures[i]){
                    res[i] = j-i;
                    break; // without break i will be overwritten eg [70, 71, 72]
                    //o/p will become [2, 1, 0] instead of [1,1,0]
                }
            }
        }
        return res;
    }
}
