class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = new MaxHeap();
        for (let stone of stones){
            heap.insert(stone);
        }
        while(heap.size > 1){
        let stone1 = heap.extractMax();
           let stone2 = heap.extractMax();
        if(stone1 > stone2){
            heap.insert(stone1-stone2);
        }
        }
        return heap.size === 0 ? 0 : heap.extractMax();
    }
}
   class MaxHeap{
        constructor(){
            this.storage =[];
            this.size =0;
        }

        getParentIndex(i){
            return Math.floor((i-1)/2);
        }

        getLeftIndex(i){
            return ((2*i) + 1)
        }

        getRightIndex(i){
            return ((2*i) + 2)
        }

        hasParent(i){
           return this.getParentIndex(i) >= 0;
        }

        hasLeft(i){
           return this.getLeftIndex(i) < this.size;
        }

        hasRight(i){
            return this.getRightIndex(i) < this.size;
        }

        getParentVal(i){
            return this.storage[this.getParentIndex(i)];
        }

        getLeftChild(i){
            return this.storage[this.getLeftIndex(i)];
        }

        getRightChild(i){
            return this.storage[this.getRightIndex(i)];
        }

        insert(val){
            this.storage[this.size] = val;
            this.size++;
            this.heapifyUp(this.size -1)
        }

        swap(i1, i2){
            [this.storage[i1], this.storage[i2]] = [this.storage[i2], this.storage[i1]]
        }

        heapifyUp(i){
            if(this.hasParent(i) && this.getParentVal(i) < this.storage[i]){
                this.swap(i, this.getParentIndex(i));
                this.heapifyUp(this.getParentIndex(i))
            }
        }

        extractMax(){
            const data = this.storage[0];
            this.storage[0] = this.storage[this.size -1];
            this.size--;
            this.storage.pop();
            this.heapifyDown(0);
            return data;
        }

        heapifyDown(i){
            let largest = i
            if(this.hasLeft(i) && this.getLeftChild(i) > this.storage[largest]){
                largest = this.getLeftIndex(i);
            }
             if(this.hasRight(i) && this.getRightChild(i) > this.storage[largest]){
                largest = this.getRightIndex(i);
            }
            if(largest !== i){
                this.swap(i, largest);
                this.heapifyDown(largest)
            }
        }


    }
