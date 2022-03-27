/**
 * @author maneeshavenigalla
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the 
 * ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the 
 * container contains the most water. Return the maximum amount of water a container can store. Notice that you may not 
 * slant the container.
 * @param {number[]} height
 * @return {number}
 */
// Time complexity - O(n)
// Space complexity - O(1)
 var maxArea = function(height) {
    
    let left = 0;
    let right = height.length - 1;
    let area = 0;

    while(left < right) {
        area = Math.max(area, (right - left) * Math.min(height[left], height[right]));
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return area;
};

module.exports = maxArea;
