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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(!preorder.length || !inorder.length) return null;

        let root = new TreeNode(preorder[0]);

        let index = inorder.indexOf(root.val);

        let leftIn = inorder.slice(0, index);
        let rightIn = inorder.slice(index+1);
        let leftPre = preorder.slice(1, index+1);
        let rightPre = preorder.slice(index+1);
        
        root.left = this.buildTree(leftPre, leftIn);
        root.right = this.buildTree(rightPre, rightIn);
        return root;
    }
}
