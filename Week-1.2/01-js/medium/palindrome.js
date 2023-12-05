/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str === "") return true;

  str = str.toLowerCase();

  let refined = "";
  for(let i=0;i<str.length;i++) {
    if(str[i] !== " " && (str[i] >= 'a' && str[i] <='z')) {
      refined += str[i];
    }
  }

  let reversed = refined.split('').reverse().join('');

  if(refined === reversed) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
