/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//            V
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {

    const hashMap = {}; 
    let num = '';
    let letter = '';

    for (let i = 0; i < str.length; i++) { // running through each character in str
        if (isNaN(parseInt(str[i]))) {
            if (num !== '') {
                if (hashMap.hasOwnProperty(letter)) {
                    hashMap[letter] += parseInt(num);
                } else {
                    hashMap[letter] = parseInt(num);
                }
                num = '';
            }
            letter = str[i];
        } else {
            num += str[i];
        }
    }
    console.log(hashMap)

    let newStr = '';
    const sortedKeys = Object.keys(hashMap).sort();

    for (const key of sortedKeys) {
        newStr += key + hashMap[key];
    }

    return newStr;
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");

// hints
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")