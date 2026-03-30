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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    // isSameTree(p, q) {
    //     if(!p && !q) return true;
    //     if(!p || !q || p.val !== q.val) return false;
    //     return (isSameTree(p.left,q.left) && isSameTree(p.right,q.right))
    // }

    isSameTree(p,q){
        let current1 = [p];
        let current2 = [q];
        while(current1.length && current2.length){
            let node1 = current1.shift();
            let node2 = current2.shift();
            if(!node1 && !node2) continue;
             if(!node1 || !node2 || node1.val !== node2.val) return false;
             current1.push(node1.left);
            current1.push(node1.right);
             current2.push(node2.left);
             current2.push(node2.right);
        }
        return current1.length === 0 && current2.length === 0;
    }
}
