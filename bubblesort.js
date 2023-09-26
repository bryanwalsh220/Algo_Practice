// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//             j j+1
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const bubbleSort = (nums) => {
    var i, j, temp; // variables for loop
    for (i = 0; i < nums.length; i++) { // loop through every element in the array 
        for (j = 0; j < nums.length - i - 1; j++) { // for every one element loop through the array 
            if (nums[j] > nums[j + 1]) { //if value at nums[j] is greater than the value +1
                temp = nums[j]; //we assign the temp variable to the value of nums[j]
                nums[j] = nums[j + 1]; // nums[j] now becomes the value of the next value in the array
                nums[j + 1] = temp; //resetting the temp value to the value of the next number in the array 
            }
        }
    }
    return nums; //return the sorted array
}

bubbleSort(nums1);
console.log(nums1);

bubbleSort(nums2)
console.log(nums2);

bubbleSort(nums3)
console.log(nums3);


