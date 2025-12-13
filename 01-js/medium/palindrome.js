/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str = "") {
  let isPalindrome = true;
  str = str
    .trim()
    .replace(/\s/g, "")
    .replace(/[^\w\s]|_/g, "")
    .toLowerCase();

  for (let index = 0; index < str.length / 2; index++) {
    const a = str[index];
    const b = str[str.length - index - 1];
    isPalindrome = a === b;
    if (!isPalindrome) {
      return isPalindrome;
    }
  }
  return isPalindrome;
}
isPalindrome("A man a plan a canal Panama");

module.exports = isPalindrome;
