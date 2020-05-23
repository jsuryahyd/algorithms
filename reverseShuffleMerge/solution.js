const tests = require("./test-cases.js").tests;
const expect = require("expect");
/**
 * Given a string, , we define some operations on the string as follows:

a.  denotes the string obtained by reversing string . Example: 


b.  denotes any string that's a permutation of string . Example: 


c.  denotes any string that's obtained by interspersing the two strings  & , maintaining the order of characters in both. For example,  & , one possible result of  could be , another could be , another could be  and so on.

Given a string  such that  for some string , find the lexicographically smallest .

For example, . We can split it into two strings of . The reverse is  and we need to find a string to shuffle in to get . The middle two characters match our reverse string, leaving the  and  at the ends. Our shuffle string needs to be . Lexicographically , so our answer is .

Function Description

Complete the reverseShuffleMerge function in the editor below. It must return the lexicographically smallest string fitting the criteria.

reverseShuffleMerge has the following parameter(s):

s: a string
 */
// Complete the reverseShuffleMerge function below.
function reverseShuffleMerge(s) {
  function getBreakUp(s) {
    let b = {};
    for (var i of s) {
      if (b[i]) {
        b[i] = b[i] + 1;
      } else {
        b[i] = 1;
      }
    }
    return b;
  }

  let breakUp = getBreakUp(s);
  // var breakUpInLexiOrder = Object.keys(breakUp) //.sort()
  // console.log("ordered",breakUpInLexiOrder)
  // return breakUp;
  let requiredBreakUp = {};
  for (var l in breakUp) {
    requiredBreakUp[l] = breakUp[l] / 2;
  }
  // return requiredBreakUp;

  let originalString = "";
  //since the original string was reversed before merging
  let s1 = s.split("").reverse().join("");
  while (originalString.length < s.length / 2) {
    var char = s1[0];
    if (requiredBreakUp[char]) {
      s1 = s1.substr(1);
      if (getBreakUp(s1)[char] <= requiredBreakUp[char]) {
        originalString += char;
        requiredBreakUp[char] = requiredBreakUp[char] - 1;
      } else {
        console.log("--");
      }
    }
  }

  return originalString; //.split("").reverse().join("");
}

tests.forEach((t) => {
  expect(reverseShuffleMerge(...t.inputs)).toEqual(t.expected);
});
console.log("tests passed");

//

// function reverseShuffleMerge(s) {
// 	// 1 - extract the shuffled substr
// 	// count each letters
// 	const letters = {};
// 	let shuffledStr = '';
// 	for(const c of s) {
// 			if(!letters[c]) {
// 					letters[c] = 0;
// 			}
// 			letters[c]++;
// 			if(letters[c]%2 == 0){
// 					shuffledStr += c;
// 			}
// 	}
// 	shuffledStr = [...shuffledStr].sort().join('');
// 	console.error(shuffledStr);
// 	// 2 - reverse S and find the lexicographically smallest subset
// 	const revS = [...s].reverse().join('');

// 	return shuffledStr;
// }

// function reverseShuffleMerge(s) {
// 	let l = s.length
// 	var m = l/2
// 	for (let i = (l/2); i < l; i++) {
// 			if (s[i] < s[m]) {
// 					m = i
// 			}
// 	}
// 	let p = s.slice(m - (l / 2) + 1, m + 1)
// 	let q = p.split('').reverse().join('')
// 	return q
// }

// function reverseShuffleMerge(s) {

// 	let uniq = {};
// 	let newS = [];
// 	for (let c of s) {
// 			if (!uniq[c] || (uniq[c] % 2) == 0 ){
// 					newS.push(c);
// 			}
// 			uniq[c] = uniq[c] ? uniq[c] + 1 : 1;
// 	}
// 	return newS.join("");

// }
