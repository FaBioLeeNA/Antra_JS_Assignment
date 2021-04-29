// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumber = (n) => {
  let answer = 0;
  while (n > 0) {
    answer = answer * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
};

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward,
// e.g.,madam or nurses run.

const isPalindrome = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

const allCombination = (s) => {
  let answer = new Set();
  for (let i = 0; i < s.length; i++) {
    let index = i;
    let str = "";
    while (index < s.length) {
      str += s[index++];
      answer.add(str);
    }
  }
  return Array.from(answer);
};

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const orderString = (s) => {
  return s
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
};

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

const firstLetterUpper = (s) => {
  return s
  .split(" ")
  .map(i => i[0].toUpperCase().concat(i.slice(1)))
  .join(" ")
};


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

const longestWord = (s) => {
  let ans = '';
  s.split(' ').forEach(i => ans = (ans.length < i.length) ? i : ans);
  return ans;
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

module.exports = {
  reverseNumber,
  isPalindrome,
  allCombination,
  orderString,
  firstLetterUpper,
  longestWord
};
