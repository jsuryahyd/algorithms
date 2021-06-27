const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
 * 
 *

 * @param {number[]} a 
 * @param {number} m 
 */

function beautifulDays(i,j,k) {
  // Write your code here
    let numDays = 0
 for(var a=i;a<=j;a++){
    const reminder = (Math.abs(a - Number(reverseString(a+""))) / k );
     if( reminder === Math.floor(reminder)) numDays++;
 }
 return numDays;
}

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

tests.map(t=>{
	expect(beautifulDays(...t.inputs)).toBe(t.expected[0]);
})

console.log("tests completed")