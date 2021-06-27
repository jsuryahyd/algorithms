const expect = require("expect")
var tests = require("./test-cases.js").tests;
const util = require("util");
/* https://www.hackerrank.com/rest/contests/master/challenges/sherlock-and-anagrams/hackers/ChesterDrawers/download_solution
 */
function sortChars(a, b) {
  return a.charCodeAt() - b.charCodeAt();
}

/**
 * @param {*} s
 */
function findAnagramicPairs(s) {
  console.time("timeTaken");
  var str = s.split(""),
    filter = {},
    pairs = 0;
  var index,
    cursor,
    length = 1;
  while (length < str.length + 1) {
    index = 0;
    while (index + length < str.length + 1) {
      cursor = str
        .slice(index, index + length)
        .sort(sortChars)
        .join("");
      if (filter[cursor]) {
        pairs += filter[cursor];
        filter[cursor]++;
      } else {
        filter[cursor] = 1;
      }
      index++;
    }
    filter = {};
    length++;
  }
  console.timeEnd("timeTaken");
  console.log(pairs);
  return pairs;
}

tests.map(t=>{
	// console.log(minimumAbsoluteDifference(t))
	expect(findAnagramicPairs(...t.input)).toBe(t.expected);
	
	})
	console.log("tests completed");