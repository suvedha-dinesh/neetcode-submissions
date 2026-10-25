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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        let queue = [root];
        let output = [];
        while (queue.length) {
            let currLength = queue.length;
            let currentLevel = [];
            for (let i = 0; i < currLength; i++) {
                let node = queue.shift();
                currentLevel.push(node.val);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
            output.push(currentLevel[currentLevel.length -1]);
        }
        return output;
    }
}
