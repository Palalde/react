Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

```javaScript
// solution 1:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let count = Array(nums.length).fill(0);
    let result = [];

    for (const n of nums) {
        count[n - 1] = n;
    }

    for (let i = 0; i < count.length; i++) {
        if (!count[i]) {
            result.push(i + 1);
        }
    }

    return result;
};

//solution 2:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let result = [];

    for (const n of nums) {

        let a = Math.abs(n);
        let p = Math.abs(nums[a - 1]);
        nums[a - 1] = p * -1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};

```
