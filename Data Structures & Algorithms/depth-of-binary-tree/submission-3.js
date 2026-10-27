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
    maxDepth(root) {
        if (!root) return 0;
        let queue = [root];
        let level = 0;
        let head =0;
        while (head < queue.length) {
            let currLength = queue.length - head;
            for(let i=0; i<currLength; i++){
                   let node = queue[head++];
            if (node.left) queue.push(node.left);
            if (node.right)queue.push(node.right);
            }
            level++;
        }
        return level;
    }
}
