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
        let result = 0;
        function dfs(root){
            if(!root) return 0;
            const leftHeight = dfs(root.left);
            const rightHeight = dfs(root.right);
             result = Math.max(result, leftHeight + rightHeight)
            let height = 1 + Math.max(leftHeight, rightHeight);
            return height;
        }
        dfs(root);
        return result;
    }
}
