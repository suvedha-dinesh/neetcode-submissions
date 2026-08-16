class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let len = nums.length;

        let obj={};
        let result= [];
        for(let i=0; i< len; i++){
            obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        }
        for(let key in obj){
            console.log(key) 
            if(obj[key] > len/3){
                result.push(Number(key));
            }   
        }
        return result;
    }
}
