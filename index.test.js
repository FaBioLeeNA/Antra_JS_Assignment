const { expect } = require('@jest/globals');
const {reverseNumber, isPalindrome, allCombination, orderString} = require('./index.js')

test('reverse the number 32243 to 34223', () => {
  expect(reverseNumber(32243)).toBe(34223);
});

test('check if \'madam\' is palindrome', () => {
  expect(isPalindrome('madam')).toBe(true);
});
test('check if \'boat\' is palindrome', () => {
  expect(isPalindrome('boat')).toBe(false);
});

test('check all combination of \'dog\'', () => {
  let answer = allCombination('dog')
  let expected = ['d','do','dog','o','og','g']
  expect(answer.length).toBe(expected.length)
  expect(answer).toEqual(expect.arrayContaining(expected));
});

test('order \'webmaster\' alphabetically', () => {
  expect(orderString('webmaster')).toBe('abeemrstw');
});