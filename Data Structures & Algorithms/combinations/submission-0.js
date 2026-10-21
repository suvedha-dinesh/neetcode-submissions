class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result=[];
        let subset=[];

        function dfs(index){
            if(subset.length === k){
                result.push([...subset]);
                return;
            }
            for(let i=index; i<=n;i++){
                subset.push(i);
                dfs(i+1);
                subset.pop();
            }
        }
        dfs(1);
        return result;
    }
}
