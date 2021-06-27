const expect = require("expect")
var tests = require("./test-cases.js").tests;
const util = require("util");

//https://www.hackerrank.com/challenges/reduced-string/problem
function superReducedString(s) {
	let pointer = 0;
	while (pointer<s.length){
			if(s[pointer] == s[pointer+1]){
					s = s.slice(0,pointer)+s.slice(pointer+2);
					pointer = -1
			}
			pointer++;
	}
	// return s.length == reducedstr.length ? reducedstr ||  "Empty String" : superReducedString(reducedstr);
	
	return s ||  "Empty String";
	}


	tests.map(t=>{
		// console.log(minimumAbsoluteDifference(t))
		expect(superReducedString(...t.input)).toBe(t.expected);
		
		})
		console.log("tests completed");