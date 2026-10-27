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
        function dfs(root) {
            if (!root) return [0, true];
            let [leftHeight, leftBalanced] = dfs(root.left);
            let [rightHeight, rightBalanced] = dfs(root.right);
            let balanced = leftBalanced && rightBalanced && Math.abs(rightHeight - leftHeight) <= 1;

            let height = 1 + Math.max(leftHeight, rightHeight);
            return [height, balanced];
        }

        return dfs(root)[1];
    }
}
