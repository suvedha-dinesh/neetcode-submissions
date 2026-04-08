class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */

    //0 0 0 0 0
    //1 0 0 0 1 // 1 + dp[n-1] where n =1;
    //2 0 0 1 0 // 1 + dp[n-2] where n =2;
    //3 0 0 1 1 // 1 + dp[n-2] where n =3;
    //4 1 0 0 0 // 1 + dp[n-4]
    //5 1 0 0 1 // 1 + dp[n-4]
    //6 1 0 1 0 // 1 + dp[n-4]
    //7 1 0 1 1 // 1 + dp[n-4]
    //8 1 0 0 0 // 1 + dp[n-8]
    countBits(n) {
        let dp =[0];
        let offset =1;
        for(let i=1; i< n+1; i++){
            if(offset * 2 === i){
                offset =i;
            }
            dp[i] = 1 + dp[i-offset]
        }
        return dp;
    }
}
