"use strict";

function bracesChecker(str) {
  if (!str) {
    return true;
  }
  
  const openingBraces = ["{", "[", "("];
  const closingBraces = ["}", "]", ")"];
  const stack = [];
  let openIndex;

  let closeIndex;

  for (let i = 0, len = str.length; i < len; i++) {
    openIndex = openingBraces.indexOf(str[i]);
    closeIndex = closingBraces.indexOf(str[i]);
    if (openIndex !== -1) {
    
      stack.push(str[i]);
    
    }
    if (closeIndex !== -1) {
      if (openingBraces[closeIndex] === stack[stack.length - 1]) {
          stack.pop();
          
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
const testStrings = ["(())", "{{{{{}}}})}}","(]"];
testStrings.forEach((val) => console.log(`${val} => ${bracesChecker(val)}`));

