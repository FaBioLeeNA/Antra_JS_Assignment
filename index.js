// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumber = (n) => {
  let answer = 0;
  while (n > 0) {
    answer = answer * 10 + n%10
    n = Math.floor(n/10);
  }
  return answer;
} 

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, 
// e.g.,madam or nurses run.

const isPalindrome = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false
    }
  }
  return true;
}

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g

const allCombination = (s) => {
  let answer = new Set()
  for (let i = 0; i < s.length; i++) {
    let index = i;
    let str = ''
    while(index < s.length) {
      str += s[index++];
      answer.add(str)
    }
  }
  return Array.from(answer);
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const orderString = (s) => {
  return s.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
}


module.exports = {
  reverseNumber,
  isPalindrome,
  allCombination,
  orderString
}

