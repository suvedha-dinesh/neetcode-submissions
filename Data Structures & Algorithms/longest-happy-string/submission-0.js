class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        const heap = new MaxHeap(x => x[0])
        if(a > 0) heap.insert([a, 'a'])
        if(b > 0) heap.insert([b, 'b'])
        if(c > 0) heap.insert([c, 'c'])
        let res = [];

        while(!heap.isEmpty()){
        const [count, char] = heap.extractMax();
        if(res.length > 1 && res[res.length -1] === char && res[res.length -2] === char){
            if(heap.isEmpty()) break;
            const [count1, char1] = heap.extractMax();
            res.push(char1)
            if(count1 - 1 > 0) heap.insert([count1-1, char1]);
            heap.insert([count, char]);

        } else{
          res.push(char)
          if(count - 1 > 0) heap.insert([count-1, char])
        }
        }
        return res.join('');
    }
}

class MaxHeap{
    constructor(compare = x => x){
        this.storage = [];
        this.size =0;
        this.compare = compare;
    }

    getParentIndex(index){
        return Math.floor((index - 1)/ 2)
    }
    getLeftIndex(index){
        return ((2 * index) + 1)
    }
    
    getRightIndex(index){
        return ((2 * index) + 2)
    }

    hasLeftIndex(index){
        return this.getLeftIndex(index) < this.size;
    }
    hasRightIndex(index){
        return this.getRightIndex(index) < this.size;
    }
    hasParentIndex(index){
        return this.getParentIndex(index) >=0;
    }

    getParentVal(index){
        return this.storage[this.getParentIndex(index)]
    }
    getLeftChildVal(index){
        return this.storage[this.getLeftIndex(index)]
    }
    getRightChildVal(index){
        return this.storage[this.getRightIndex(index)]
    }

    isEmpty(){
        return this.size === 0;
    }
    peek(){
        return this.storage[0];
    }

    insert(val){
        this.storage[this.size] = val;
        this.size++;
        this.heapifyUp(this.size-1); 
    }

    swap(i1, i2){
        [this.storage[i1] , this.storage[i2]] = [this.storage[i2] , this.storage[i1]]
    }

    heapifyUp(index){
        if(this.hasParentIndex(index) && this.compare(this.getParentVal(index)) < this.compare(this.storage[index])){
            this.swap(index, this.getParentIndex(index));
            this.heapifyUp(this.getParentIndex(index))
        }
    }

    extractMax(){
        const data = this.storage[0];
        this.storage[0] = this.storage[this.size -1];
        this.storage.pop();
        this.size--;
        this.heapifyDown(0);
        return data;
    }

    heapifyDown(index){
        let largest = index;
        if(this.hasLeftIndex(index) && this.compare(this.getLeftChildVal(index)) > this.compare((this.storage[largest]))){
            largest = this.getLeftIndex(index)
        }
        if(this.hasRightIndex(index) && this.compare(this.getRightChildVal(index)) > this.compare((this.storage[largest]))){
            largest = this.getRightIndex(index)
        }
        if(largest !== index){
            this.swap(index, largest);
            this.heapifyDown(largest)
        }
    }
}
