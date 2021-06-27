const tests = require("./test-cases.js").tests;
const expect = require("expect");
/**
 * In this challenge, you will be given a string. You must remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Your goal is to create the longest string possible that contains just two alternating letters.

As an example, consider the string abaacdabd. If you delete the character a, you will be left with the string bcdbd. Now, removing the character c leaves you with a valid string bdbd having a length of 4. Removing either b or d at any point would not result in a valid string.

Given a string , convert it to the longest possible string  made up only of alternating characters. Print the length of string  on a new line. If no string  can be formed, print  instead.

Function Description

Complete the alternate function in the editor below. It should return an integer that denotes the longest string that can be formed, or  if it cannot be done.

alternate has the following parameter(s):

s: a string
 */
// Complete the alternate function below.
function alternate(s) {
  let reqMaxStrLength = 0;
  let letters = s
    .split("")
    .reduce((ls, l) => (ls.indexOf(l) >= 0 ? ls : [...ls, l]), []);
  let letterOrderCombos = permutations(letters);

  while (letterOrderCombos.length) {
    let combo = letterOrderCombos.shift();
    let altStr = getAlternateString(s, combo);
    reqMaxStrLength =
      reqMaxStrLength > altStr.length ? reqMaxStrLength : altStr.length;
  }
  return reqMaxStrLength;
}

function isAlternateLetteredString(s) {
  let pointer = 2;
  while (pointer < s.length) {
    if (s[pointer] != s[pointer - 2]) {
      return false;
    }
    pointer++;
  }
  return true;
}


//https://stackoverflow.com/a/24622772/7314900
function permutations(arr) {
  var finalArr = [];
  function iterator(arrayTaken, tree) {
      var temp;
      for (var i = 0; i < tree; i++) {
          temp = arrayTaken.slice();
          temp.splice(tree - 1 - i, 0, temp.splice(tree - 1, 1)[0]);
          if (tree >= arr.length) {
              finalArr.push(temp);
          } else {
              iterator(temp, tree + 1);
          }
      }
  }
  iterator(arr, 1);
  return finalArr;
};

function getAlternateString(s, order) {
  let altStr = s;

  while (order.length) {
    
    let letter = order.shift();
    if(altStr.indexOf(letter) == -1) continue;
    altStr = altStr.replace(new RegExp(letter,"g"), "");
    if(altStr.length <= 2) return ""
    if (isAlternateLetteredString(altStr)) {
      return altStr;
    }
  }
  return "";
}

tests.forEach((t) => {
  expect(alternate(...t.inputs)).toEqual(t.expected);
});
console.log("tests passed");

function getLetterArray(s){
  let letterArray = [];
  for(var letter of s){
      if(letterArray.indexOf(letter) === -1){
          letterArray.push(letter);
      }
  }
  return letterArray;
}

function getLength(l1, l2, s){
  let lastLetter = null;
  let sum = 0;
  for(var l of s){
      if(l === l1 || l === l2){
          if(l === lastLetter){
              return 0;
          }else{
              lastLetter = l;
              sum++;
          }
      }    
  }
  return sum;
}


function main(s) {
 
  let letterArray = getLetterArray(s);
  let maxLength = 0;
  for(let i = 0; i < letterArray.length; i++){
      for(let j = 1; j < letterArray.length; j++){
          if(j !== i){
              maxLength = Math.max(getLength(letterArray[i], letterArray[j], s), maxLength);
          }
      }
  }
  return maxLength
}
