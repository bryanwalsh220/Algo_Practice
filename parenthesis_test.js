
/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

const str4 = "Y(3(p)p(3)r)s";
const expected4 = true;

const str5 = "N(0(p)3";
const expected5 = false;
// Explanation: not every parenthesis is closed.

const str6 = "N(0)t ) 0(k";
const expected6 = false;

const str7 = "a(b))(c";
const expected7 = false;


function bracesValid(str) {
    const stack = [];
    const openBrackets = "([{";
    const closeBrackets = ")]}";
  
    for (let char of str) {
      if (openBrackets.includes(char)) {
        stack.push(char);
      } else if (closeBrackets.includes(char)) {
        const lastOpenBracket = stack.pop();
        if (!lastOpenBracket || openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  console.log(bracesValid(str1))
  console.log(bracesValid(str2))
  console.log(bracesValid(str3))
  console.log(bracesValid(str4))
  console.log(bracesValid(str5))
  console.log(bracesValid(str6))
  console.log(bracesValid(str7))

/*****************************************************************************/