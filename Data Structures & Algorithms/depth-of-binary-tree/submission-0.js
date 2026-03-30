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
        if(!root) return 0;
        return 1+ Math.max(maxDepth(root.left), maxDepth(root.right))
    }

    maxDepth(root) {
        if(!root) return 0;
        let current = [root];
        let level = 0;
        while(current.length){
            let currLength = current.length;
            for(let i=0;i<currLength;i++){
                let node = current.shift();
                if(node.left) current.push(node.left);
                if(node.right) current.push(node.right);
            }
            level++;
        }
        return level
    }
}
