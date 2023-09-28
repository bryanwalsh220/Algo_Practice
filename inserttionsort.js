

const arr1 = [3,88,5,21,33,4,100]
const arr2 = [10,9,8,7,6,5,4,3,2,1]
const arr3 = [3,5,2,1,2,0]
const arr4 = [5,4,0,2,1]

const insertionArr = (arr) => {
for (i = 1; i < arr.length; i++) {  //starting the loop at the second element because the first is considered sorted
    let temp = arr[i]; //Store current element to be inserted into the sorted position 
    for (j= i - 1; j >= 0 && arr[j] > temp; j--) { //Start comparing the current element with the elements in the sorted portion. 
                                                    //Then  Move elements greater than the current element one position ahead of their current position.
        arr[j+1] = arr[j] //value of arr[j] is now equal to the following spot in the array
    }
    arr[j+1] = temp //inserting correct element into correct position within the sorted array
}
return arr //return arr
}

console.log(insertionArr(arr1))
console.log(insertionArr(arr2))
console.log(insertionArr(arr3))
console.log(insertionArr(arr4))
