/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let oldToNew = new Map();

        function dfs(node, oldToNew){
            if(!node) return null;
            if(oldToNew.has(node)){
               return oldToNew.get(node)
            }
            let copy = new Node(node.val);
            oldToNew.set(node, copy);

            for(let nei of node.neighbors){
                copy.neighbors.push(dfs(nei, oldToNew))
            }
            return copy;
        }
        return dfs(node, oldToNew);
    }
}
