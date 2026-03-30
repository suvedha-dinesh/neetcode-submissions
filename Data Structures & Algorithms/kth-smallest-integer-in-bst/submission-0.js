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
     * @param {number} k
     * @return {number}
     */
    inorder(root, arr){
        if(!root) return;
        this.inorder(root.left, arr);
        arr.push(root.val);
        this.inorder(root.right, arr)
    }
    kthSmallest(root, k) {
        let arr = [];
        this.inorder(root, arr);
        return arr[k-1]
    }
}
