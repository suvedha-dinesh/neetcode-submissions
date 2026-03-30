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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        const newNode =  new TreeNode(val);

        if(!root) {
            root = newNode;
        } else {
              if(root.val < newNode.val){
            if(!root.right){
                root.right = newNode;
            } else this.insertIntoBST(root.right, newNode.val)
        } else {
            if(!root.left){
                root.left = newNode;
            } else this.insertIntoBST(root.left, newNode.val)
        }
        }
        return root;
    }
}
