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
        let dia =0;
          function dfs(root) {
            if (!root) return 0;
            let leftHeight= dfs(root.left);
            let rightHeight = dfs(root.right);
            let height = 1 + Math.max(leftHeight, rightHeight);
            dia = Math.max(dia, leftHeight+rightHeight)
            return height;
        }

        dfs(root);
        return dia;
    }
}
