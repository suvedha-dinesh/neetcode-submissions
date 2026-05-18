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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null;
        let queue = [root];
        while(queue.length){   
            let node = queue.shift(); // 2
            [node.left, node.right] = [node.right, node.left]
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
        }
        return root;
    }
}
