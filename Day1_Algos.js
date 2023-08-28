var smallerStringA1 = 'abcd';
var smallerStringB1 = 'efg';
var expected = 'efgabcd';

var smallerStringA2 = 'sunnyside up eggs';
var smallerStringB2 = 'biscuits and gravy';
var expected = 'sunnyside up eggsbiscuits and gravy';

function combineSmallerStringFirst(smallerStringA1, smallerStringB1) {
    if (smallerStringA1.length <= smallerStringB1.length) {
        return smallerStringA1 + smallerStringB1;
    } else {
        return smallerStringB1 + smallerStringA1;
    }
}
console.log(combineSmallerStringFirst(smallerStringA1, smallerStringB1));

//String B


function combineSmallerStringFirst(smallerStringA2, smallerStringB2) {
    if (smallerStringA2.length <= smallerStringB2.length) {
        return smallerStringA2 + smallerStringB2;
    } else {
        return smallerStringB2 + smallerStringA2;
    }
}
console.log(combineSmallerStringFirst(smallerStringA2, smallerStringB2));

/*****************************************************************/

var stringToRepeat1 = 'Birria Tacos';
var numberToRepeat1 = 5;
var repeatedExpected =
  'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos';

var stringToRepeat2 = 'margherita pizza';
var numberToRepeat2 = 2;
var repeatedExpected = 'margherita pizzamargherita pizza';

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(stringToRepeat, numberToRepeat) {
    var repeatedString = "";
    for (var i = 0; i < numberToRepeat; i++) {
    repeatedString += stringToRepeat + " ";
    }
    return repeatedString;
}

console.log(stringRepeat(stringToRepeat1, numberToRepeat1));

/*****************************************************************/

var wordArray = [
  'shawn',
  'jim',
  'tyler',
  'heidi',
  'john',
  'alfredo',
  'michael',
];

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 *    How are we keeping track of the longest word?
 */
function findLongestWord(wordArray) {
    var longestWord = wordArray[0];
    var temp = " ";
    for (var i = 0; i < wordArray.length; i++) {
        temp = wordArray[i];
        if (temp.length > longestWord.length) {
            longestWord = temp;
        }
    }
    return longestWord;
}

console.log(findLongestWord(wordArray));

/*****************************************************************/

/** BONUS *********************************************************/

var rangeA1 = 10;
var rangeB1 = 15;
var rangeExpected = 75;
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(rangeA1, rangeB1) {
    var sum = 0;
    for (var i = rangeA1; i <= rangeB1; i++) {
        sum += i;
    }
    return sum;
}
console.log(inclusiveRangeSum(rangeA1, rangeB1))


/* 
  Given an array and an item to search for,
  return the index where the item is found,

  return -1 to represent not found
  */
  var arr1 = ["a", "b", "c"];
  var searchItem1 = "c";
  var expected1 = 2;
  
  var arr2 = ["a", "b", "c"];
  var searchItem2 = 5;
  var expected2 = -1;
  
  var arr3 = ["c", "a", "b", "c"];
  var searchItem3 = "c";
  var expected3 = 0;
  
  var arr4 = [];
  var searchItem4 = 5;
  var expected4 = -1;
  
  /**
   * Finds the index from the given array where the given item is found.
   * @param {Array<any>} items An array of any kind of items.
   * @param {any} searchItem The item to find.
   * @returns {number} The index of found item, or -1 if not found.
   */
  function indexOf(item, search){
    for (var i = 0; i < item.length; i++) {
        if (item[i] == search) {
            return i
        }
        else if (i == item.length -1 && item[i] != search){
            return -1
        }
    }
}
console.log(indexOf([35,45,55,65], 20))
  
  // Tests
  var result1 = indexOf(arr1, searchItem1);
  console.log(result1, "should be", expected1);
  
  var result2 = indexOf(arr2, searchItem2);
  console.log(result2, "should be", expected2);
  
  var result3 = indexOf(arr3, searchItem3);
  console.log(result3, "should be", expected3);
  
  var result4 = indexOf(arr4, searchItem4);
  console.log(result4, "should be", expected4);