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
        let result =[];
        function dfs(root){
            let queue = [root];
            while(queue.length){
                let node = queue.shift();
                if(node){    
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
                } else result.push('null')
            }
        }
        dfs(root);
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
        let node = data.split(',');

        let root = new TreeNode(node[0]);

        let queue = [root];
        let i=1;
        while(queue.length && i<node.length){
            let current = queue.shift();

            if(node[i] !== 'null') {
                current.left =  new TreeNode(node[i]);
                queue.push(current.left)
            }
            i++;
            if(node[i] !== 'null') {
                current.right =  new TreeNode(node[i]);
                queue.push(current.right);
            }
            i++;
        }
        return root;
    }
}
