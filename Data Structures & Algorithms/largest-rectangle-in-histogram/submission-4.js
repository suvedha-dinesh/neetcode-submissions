class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea =0;
        let stack= [];
        for(let i=0; i<heights.length; i++){
            let currHeight = heights[i];
            let currIndex = i;
            while(stack.length > 0 && heights[i] < stack[stack.length-1].height){
                const {index, height} = stack.pop();
                let width = i - index;
                let area = width * height;
                maxArea = Math.max(area, maxArea);
                currIndex = index;
            }
            stack.push({ index: currIndex, height: currHeight });
        }

        while(stack.length >0){
            const {index, height} = stack.pop();
            // 2 4 4 4
            let width =  heights.length - index
            let area = width * height;
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}
