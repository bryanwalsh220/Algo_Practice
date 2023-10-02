// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//                              a
var arr1 = [1, 3, 3, 5, 8, 10,];
//                              b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

//                   i
var arrA = [1, 3, 4, 5];
//                   j
var arrB = [1, 3, 3, 5, 8, 10,];
// [1, 3, 4]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭
function mergeDedupe(arr1, arr2) { 
const mergedArr = [];
let i = 0;
let j = 0;
//// While either i is less than the length of arr1 or j is less than the length of arr2
while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) { //// If i is less than the length of arr1 and (j is greater than or equal to the length of arr2 OR arr1[i] is less than arr2[j])
        if (mergedArr.length === 0 || arr1[i] !== mergedArr[mergedArr.length - 1]) { //// If mergedArr is empty OR the current element of arr1 is not equal to the last element of mergedArr
            mergedArr.push(arr1[i]); //// Push the current element of arr1 to mergedArr
        }
        i++;
    } else {
        //// If mergedArr is empty OR the current element of arr2 is not equal to the last element of mergedArr
        if(mergedArr.length === 0 || arr2[j] !== mergedArr[mergedArr.length - 1]) {
            mergedArr.push(arr2[j]);
        }
        j++
    }
}
return mergedArr;
}
console.log(mergeDedupe(arr1, arr2))
console.log(mergeDedupe(arrA, arrB))
// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]