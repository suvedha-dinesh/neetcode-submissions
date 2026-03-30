class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();
        for(let num of nums){
            this.heap.insert(num);
            if(this.heap.size > k){
                this.heap.remove()
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if(this.heap.size < this.k){
            this.heap.insert(val);
        } else if(val > this.heap.peek()){
            this.heap.remove();
            this.heap.insert(val)
        }

        return this.heap.peek()
    }
}

class MinHeap{
    constructor(){
        this.size =0;
        this.storage = [];
    }

getParentIndex(index){
    return Math.floor((index - 1)/2)
}

getLeftIndex(index){
    return ((2*index) + 1);
}

getRightIndex(index){
    return ((2*index)  + 2);
}

peek(){
    return this.storage[0];
}

hasParentIndex(i){
 return this.getParentIndex(i) >= 0;
}

hasLeftIndex(i){
    return this.getLeftIndex(i) < this.size;
}

hasRightIndex(i){
    return this.getRightIndex(i) < this.size;
}

getParent(i){
    return this.storage[this.getParentIndex(i)]
}

getLeft(i){
    return this.storage[this.getLeftIndex(i)]
}

getRight(i){
    return this.storage[this.getRightIndex(i)]
}

swap(i1, i2){
    [this.storage[i1], this.storage[i2]] = [this.storage[i2], this.storage[i1]]
}

insert(val){
    this.storage[this.size] = val;
    this.size++;
    this.heapifyUp(this.size - 1)
}

heapifyUp(i){
    if(this.hasParentIndex(i) && this.getParent(i) > this.storage[i]){
        this.swap(i, this.getParentIndex(i));
        this.heapifyUp(this.getParentIndex(i))
    }
}

remove(){
    if(this.size === 0){
        throw new Error('Heap is Empty')
    }
    const data = this.storage[0];
    this.storage[0] = this.storage[this.size-1];
    this.size--;
    this.storage.pop();
    this.heapifyDown(0);
    return data;
}

heapifyDown(i){
    let smallestIndex = i;

    if(this.hasLeftIndex(i) && this.getLeft(i) < this.storage[smallestIndex]){
            smallestIndex = this.getLeftIndex(i)
    }
     if(this.hasRightIndex(i) && this.getRight(i) < this.storage[smallestIndex]){
            smallestIndex = this.getRightIndex(i)
    }
    if(smallestIndex !== i){
        this.swap(i, smallestIndex);
        this.heapifyDown(smallestIndex)
    }
}


}
