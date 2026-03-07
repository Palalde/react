Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

```javaScript
// solution 1 :

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    // definir les curseurs
    let i = 0;
    let j = nums.length - 1;

    // tant que les curseurs ne sont pas au même endroit
    while (j > i) {

        if (nums[i] === val) {
            nums.splice(i, 1);
        } else { i++ }

        if (nums[j] === val) {
            nums.splice(j, 1);
        } else { j-- }
    }

    return nums.length
};

// solution 2 :

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    // definir les curseurs
    let i = 0;
    let j = nums.length - 1;

    // tant que les curseurs ne sont pas au même endroit
    while (j >= i) {

        if (nums[i] === val) {
            nums.splice(i, 1);
        } else { i++ }

        if (nums[j] === val) {
            nums.splice(j, 1);
        } else { j-- }
    }

    return nums.length
};

// solution 3

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // compteur
    let k = []
    // definir les curseurs
    let i = 0;
    let j = nums.length - 1;

    // tant que les curseurs ne sont pas au même endroit
    while (i <= j) {

        if (nums[i] === val) {
            i++;
        } else { k.push(nums[i]); i++; }

        if (nums[j] === val) {
            j--;
        } else { k.push(nums[j]); j--; }
    }

    for (let l = 0; l < k.length; l++) {
        nums[l] = k[l]
    }

    return k.length
};

// solution 4

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // compteur
    let k = []
    // definir les curseurs
    let i = 0;
    let j = nums.length - 1;

    // tant que les curseurs ne sont pas au même endroit
    while (i <= j) {

        if (nums[i] === val) {
            i++;
        } else {
            k.push(nums[i]);
            i++;
        }

        if (i > j) break;

        if (nums[j] === val) {
            j--;
        } else {
            k.push(nums[j]);
            j--;
        }
    }

    for (let l = 0; l < k.length; l++) {
        nums[l] = k[l]
    }

    return k.length
};

// solution 5 :

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // tableau
    let k = []

    // mettre dans le tableau les valeurs !val
    for (const num of nums) {
        if (num !== val) {
            k.push(num);
        }
    }

    // changer num avec les valeurs du tableau
    for (let i = 0; i < nums.length; i++) {
        nums[i] = k[i];
    }

    // // optionnel enlever le reste du tableau
    // while (nums.length > k.length) {
    //     nums.pop();
    // }

    return k.length
};

// solution 6:

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // pointeur
    let k = 0

    // boucle dans la liste
    for (let i = 0; i < nums.length; i++) {
        // si different de la valeur
        if (nums[i] !== val) {
            //changer par la valeur du pointeur
            nums[k] = nums[i];
            // avancer le pointeur
            k++;
        }
        // si nums[i] === val alors laissé le pointeur a sa place
    }

    return k
};

// solution 7:
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    // pointeur a la fin
    let n = nums.length;

    // version boucle for
    // for (let i = 0; i < n; i++) {
    //     if (nums[i] === val) {
    //         nums[i] = nums[n - 1];
    //         n--;
    //         nums.pop();
    //         i--;
    //     }
    // }

    //index pour while
    let i = 0

    while (i < n) {
        if (nums[i] !== val) {
            i++;
        } else if ( nums[i] === val ) {
            nums[i] = nums[n - 1];
            n--;
        }
    }

    return n
};

```
