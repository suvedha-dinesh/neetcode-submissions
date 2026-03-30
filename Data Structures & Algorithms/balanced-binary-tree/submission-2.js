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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(root){
            if(!root) return [true, 0];

            const [leftBal, leftH] =dfs(root.left);
            const [rightBal, rightH] =dfs(root.right);
            const height = 1 + Math.max(leftH, rightH);
            const balanced = leftBal && rightBal && (Math.abs(leftH - rightH) <= 1);
            return [balanced, height]

        }
       return dfs(root)[0];
    }
}
