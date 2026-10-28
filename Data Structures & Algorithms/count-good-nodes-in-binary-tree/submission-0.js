/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let count=0;
        function dfs(root, maxVal){
            if(!root) return 0;
            if(root.val >= maxVal){
                maxVal = root.val;
                count++;
            }
            dfs(root.left, maxVal);
            dfs(root.right, maxVal);
        }
        dfs(root, root.val);
        return count;
    }
}
