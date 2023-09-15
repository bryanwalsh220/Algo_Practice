/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/





const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [6,4,3,2,7,8,8,8,8,8,8,3,3,3,1111,1111,1111,1111,1111,1111];
const expected6 = [8,1111];

const nums7 = [5,5,5,1,1,1,4,4,4];
const expected7 = [];


//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
    if (nums.length  <= 1 ) {
        return nums;
    } 
    
    
    const count = {};
    let max = 0;

    for (const num of nums) {
        if(!count[num]) {
            count[num] = 1;
        } else {
            count[num] ++;
        }
        if (count[num] > max) {
            max = count[num];
        }
    }
    if (max === 1) {
        return [];
    }

    const modes = [];
    let allTheSame = true
    for (const num in count) {
        if (count[num] === max) {
            modes.push(parseInt(num));
        } else {
            allTheSame = false
        }
    }
if (allTheSame) {
    return [];
} 

return modes;
}

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))
console.log(mode(nums6))
console.log(mode(nums7))

/*****************************************************************************/