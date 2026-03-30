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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let current = [root];
        let level=[];
        while(current.length){
            let currentLevel=[];
            let currentSize = current.length;
            for(let i=0; i<currentSize; i++){
                const node = current.shift();
                if(node.left) current.push(node.left);
                if(node.right) current.push(node.right);
                currentLevel.push(node.val)
            }
            level.push(currentLevel)
        }
        return level;
    }
}
