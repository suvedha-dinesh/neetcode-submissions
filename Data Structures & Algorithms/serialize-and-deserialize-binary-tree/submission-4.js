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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return '';
        const result =[];
        const queue = [root];
        while(queue.length){
            const node = queue.shift();
            if(node){
                result.push(node.val.toString());
                queue.push(node.left);
                queue.push(node.right)
            } else {
                result.push('null')
            }
        }
        return result.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(!data) return null;
        let nodes = data.split(',');
        let root = new TreeNode(nodes[0]);
        let queue=[root];
        let i=1;
        while(queue.length){
            let current = queue.shift();
            if(nodes[i] !== 'null'){
                current.left = new TreeNode(nodes[i]);
                queue.push(current.left);
            }
            i++;
            if(nodes[i] !== 'null'){
                current.right = new TreeNode(nodes[i]);
                queue.push(current.right);
            }
            i++;
        }
        return root;
    }
}
