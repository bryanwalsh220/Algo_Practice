/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */


  
  //BONUS: Allow the arrays to be of different lengths!

  const keys1 = ["abc", 3, "yo"];
  const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };
  
  const keys2 = [];
  const vals2 = [];
  const expected2 = {};

  const keys3 = ["Yup", 55, "Infinity", "Nope", "Soup", "Rats", "Rat Soup"]
  const vals3 = ["Uhhuh", true, "Cars", "Starvin", "Marvin", "14", "Hello"]


  function zipArraysIntoMap(keys, values) {
    if (keys.length !== values.length ||
        keys.length == 0 ||
        values.length == 0) {
            return null;
        }
    let result = {};
    for (let i = 0; i <  keys.length; i++) {
        result[keys[i]] = values[i];   
  }
  return result;
  }
  console.log(zipArraysIntoMap(keys1,vals1));
  console.log(zipArraysIntoMap(keys2,vals2));
  console.log(zipArraysIntoMap(keys3,vals3));
  
  /*****************************************************************************/


/*****************************************************************************/
