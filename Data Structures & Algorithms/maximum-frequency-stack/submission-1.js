class FreqStack {
    constructor() {
        this.stack = [[]];
        this.freq = {};
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.freq[val] = (this.freq[val] || 0) + 1;
        const value = this.freq[val] ;
        if(this.stack[value]){
            this.stack[value].push(val)
        } else this.stack[value] = [val]

    }
// [
// 1 : [5], 2 : [5,7]
//]
    /**
     * @return {number}
     */
    pop() {
       const topStack =  this.stack[this.stack.length-1];
       let val = topStack.pop();
       this.freq[val]--;
       if(topStack.length === 0){
        this.stack.pop();
       }
       return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
