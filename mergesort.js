// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     [99, 111, 9, 15, 49]
// [88, 22]
// [88]

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
// 1, split the array down to 1
// call the merge mergeSortedArrays(left right)
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return mergeSortedArrays(
        mergeSort(left),
        mergeSort(right)
    )
}

console.log(mergeSort(testArr))

// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
// var mergeArr2 = [55, 66];
// var mergeArr1 = [33, 44];

var mergeArrA = [33, 44, 55,];
var mergeArrB = [11, 66,];

// var arrLeft = [22];
// var arrRight = [11, 33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) {
    let sortedArray = [];
    let l = 0;
    let r = 0;

    while (arr1.length > l && arr2.length > r) {
        if (arr1[l] < arr2[r]) {
            sortedArray.push(arr1.shift());
        } else {
            sortedArray.push(arr2.shift());
        };
    };
    return [...sortedArray, ...arr1, ...arr2]
}

console.log(mergeSortedArrays(mergeArrB, mergeArrA))
// console.log(mergeSortedArrays(arrLeft, arrRight))
// console.log(mergeSortedArrays(mergeArr1, mergeArr2))