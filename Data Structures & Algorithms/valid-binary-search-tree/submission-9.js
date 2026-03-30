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
    isValidBST(root) {
        if(!root) return true;
        let arr = [];
        function inorder(root){
            if(root){
            inorder(root.left);
            arr.push(root.val);
            inorder(root.right);
            }
        }
        inorder(root);
        return arr.every((val, i) => i === 0 || arr[i-1] < arr[i])
    }
}
