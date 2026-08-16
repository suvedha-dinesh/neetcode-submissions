class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let count1 =0;
        let count2= 0;
        let candidate1
        let candidate2;

        for(let num of nums){
            if(candidate1 === num){
                count1++;
            } else if(candidate2 === num){
                count2++;
            } else if(count1 === 0){
                candidate1 =num;
                count1++;
            } else if(count2 === 0){
                candidate2 =num;
                count2++;
            } else {
                count1--;
                count2--;
            }
        }

        let c1 =0;
        let c2 =0;
        let result=[];

        for(let num of nums){
            if(candidate1 === num){
                c1++;
            } else if(candidate2 === num){
                c2++;
            }
        }

        if( c1> nums.length/3){
            result.push(candidate1);
        }
        if( c2> nums.length/3){
            result.push(candidate2);
        }
        return result;
        
    }
}
