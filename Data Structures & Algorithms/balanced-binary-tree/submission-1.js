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
        const [leftBalanced, leftHeight] = dfs(root.left);
        const [rightBalanced, rightHeight] = dfs(root.right);
        let balanced = Math.abs(leftHeight - rightHeight) <= 1 && leftBalanced && rightBalanced;
        let height = 1 + Math.max(leftHeight, rightHeight)
        return [balanced, height];
        }
        return dfs(root)[0]
    }
}
