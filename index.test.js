const { expect } = require("@jest/globals");
const {
  firstLetterUpper,
  reverseNumber,
  isPalindrome,
  allCombination,
  orderString,
  longestWord,
} = require("./index.js");

test("reverse the number 32243 to 34223", () => {
  expect(reverseNumber(32243)).toBe(34223);
});

test("check if 'madam' is palindrome", () => {
  expect(isPalindrome("madam")).toBe(true);
});
test("check if 'boat' is palindrome", () => {
  expect(isPalindrome("boat")).toBe(false);
});

test("check all combination of 'dog'", () => {
  let answer = allCombination("dog");
  let expected = ["d", "do", "dog", "o", "og", "g"];
  expect(answer.length).toBe(expected.length);
  expect(answer).toEqual(expect.arrayContaining(expected));
});

test("order 'webmaster' alphabetically", () => {
  expect(orderString("webmaster")).toBe("abeemrstw");
});

test("change 'the quick brown fox' to 'The Quick Brown Fox'", () => {
  expect(firstLetterUpper("the quick brown fox")).toBe("The Quick Brown Fox");
});

test("return the longest word from 'Web Development Tutorial'", () => {
  expect(longestWord("Web Development Tutorial")).toBe("Development");
});
