/**
 * @author maneeshavenigalla
 * You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented 
 * by an integer array fruits where fruits[i] is the type of fruit the ith tree produces. 
 * You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow: 
 * You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold. 
 * Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The
 * picked fruits must fit in one of your baskets. Once you reach a tree with fruit that cannot fit in your baskets, you must stop. 
 * Given the integer array fruits, return the maximum number of fruits you can pick.
 * @param {number[]} fruits
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var totalFruit = function (fruits) {
    const hashMap = new Map();
    let left = 0;
    let maxLen = 0;

	for (let right = 0; right < fruits.length; right++) {
		const rightFruit = fruits[right];
        hashMap.set(rightFruit, hashMap.get(rightFruit) + 1 || 0);

        while (hashMap.size > 2) {
            const leftFruit = fruits[left];
            if (hashMap.get(leftFruit) === 0) {
                hashMap.delete(leftFruit);
            } else {
                hashMap.set(leftFruit, hashMap.get(leftFruit) - 1);
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};

// [1, 2, 3, 2, 2]

// {1: 0, 2: 0, 3: 0}
module.exports = totalFruit;