/*
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/


// racecar
// radar
// tacocat
// levle
// kayak

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//                V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"


const str6 = "abc";
const expected6 = false;

//     v
// baabcceee

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

function canBecomePalindrome(str) { 
    let list = [];
 
    // For each character in input strings,
    // remove character if list contains
    // else add character to list
    for(let i = 0; i < str.length; i++)
    {
        if (list.includes(str[i]))
            list.splice(list.indexOf(str[i]), 1);
        else
            list.push(str[i]);
    }
      
    // If character length is even
    // list is expected to be empty or
    // if character length is odd list size
    // is expected to be 1
    
    // If string length is even
    if (str.length % 2 == 0 && list.length == 0 || 
       (str.length % 2 == 1 && list.length == 1))
        return true;
    
    // If string length is odd
    else
        return false;
}
//     let charList = [];

//     for (let i = 0; i < str.length; i++) {
//         if (charList.includes(str[i])) 
//         charList.splice(charList.indexOf(srt[i]), 1);
//     else {
//         charList.push(str[i])
//     }
//     if (str.length % 2 == 0 && charList.length == 0 || (str.length % 2 == 1 && charList.lenght == 1))
//     return true;
//     else return false;
//     }
// }

canBecomePalindrome(str1);
canBecomePalindrome(str2);
canBecomePalindrome(str3);
canBecomePalindrome(str4);
canBecomePalindrome(str5);
canBecomePalindrome(str6)

console.log(canBecomePalindrome(str1) === expected1); 
console.log(canBecomePalindrome(str2) === expected2); 
console.log(canBecomePalindrome(str3) === expected3); 
console.log(canBecomePalindrome(str4) === expected4); 
console.log(canBecomePalindrome(str5) === expected5);
console.log(canBecomePalindrome(str6) === expected6); 