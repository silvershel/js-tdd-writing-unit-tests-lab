const word = "racecar";
const revWord = word.split('').reverse().join('');

export function isPalindrome(word) {
  if (word.toLowerCase() === revWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}