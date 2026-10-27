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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        function min(root) {
            if (!root.left) return root.val;
            return min(root.left);
        }
        function dfs(root, key) {
            if (!root) return null;
            if (!root.left && !root.right && root.val === key) {
                return null;
            }
            if (root.left && root.right && root.val === key) {
                let minVal = min(root.right);
                root.val = minVal;
                root.right = dfs(root.right, minVal);
            }
            if (!root.right && root.left && root.val === key) {
                return root.left;
            }
            if (root.right && !root.left && root.val === key) {
                return root.right;
            }
            if (root.val < key) {
                root.right = dfs(root.right, key);
            } else root.left = dfs(root.left, key);

            return root;
        }

        return dfs(root, key);
    }
}
