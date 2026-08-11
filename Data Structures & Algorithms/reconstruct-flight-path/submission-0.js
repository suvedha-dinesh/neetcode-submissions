class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        tickets.sort();
        let adj = new Map();
        for(let [from, to] of tickets){
            if(!adj.has(from)) adj.set(from, []);
            adj.get(from).push(to);
        }
        //jfk : [hou, sea];
        //hou: [jfk];
        // sea: [jfk]
    let result=[];
        function dfs(w){
            while(adj.get(w)?.length){
                let value = adj.get(w).shift();
                dfs(value);
            }
            result.push(w);
        }   
        dfs('JFK');
        return result.reverse();
        
    }
}
