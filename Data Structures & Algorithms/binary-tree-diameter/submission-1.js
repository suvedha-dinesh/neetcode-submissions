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
    diameterOfBinaryTree(root) {
        let result =0;
        function dfs(root){
            if(!root) return 0;
        const leftH = dfs(root.left);
        const rightH = dfs(root.right);
        result = Math.max(result, leftH + rightH)
        let height = 1 + Math.max( leftH, rightH);
         return height;
        }
        dfs(root);
        return result;
    }
}
