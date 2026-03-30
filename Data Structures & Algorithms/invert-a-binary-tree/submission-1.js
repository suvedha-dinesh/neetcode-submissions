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
    // invertTree(root) {
    //     if(!root) return null;
    //     [root.left, root.right] = [root.right, root.left]
    //     invertTree(root.left)
    //     invertTree(root.right)
    // }
    //BFS

    invertTree(root){
        if(!root) return null;
        const current = [root];
        while(current.length){
            let node = current.shift();
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            if(node.left) current.push(node.left);
           if(node.right) current.push(node.right);
        }
        return root;
    }
}
