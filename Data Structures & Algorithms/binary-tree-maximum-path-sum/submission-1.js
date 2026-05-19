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
// root.left + root.val + root.right
// root.val  + Math.max(root.left, root.right);
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let max  = -Infinity;
        function dfs(node){
            if(!node) return null;
            let left = Math.max(0, dfs(node.left));
            let right = Math.max(0, dfs(node.right));
            let currMax = left + node.val + right;
            max = Math.max(max, currMax);
            return node.val + Math.max(left, right);
        }

        dfs(root);
        return max;
    }
}
