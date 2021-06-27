// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

const expect = require("expect")
var tests = require("./test-cases.js").tests;
const util = require("util");
/**
 * 
 * Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example , the list of all anagrammatic pairs is  at positions  respectively.

Function Description

Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in .

sherlockAndAnagrams has the following parameter(s):

s: a string .
 */

 // Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
	console.time("timeTaken")
	//get all substr
	
	var charMap = {}
	var pointer = 0; 
	var pairs = 0;
	while(s.length){
			for(var i=1;i<= s.length;i++){
			var sub = s.substr(0,i);
			var sortedSub = sub.split("").sort().join();
			if(charMap[sortedSub]){
				pairs+=charMap[sortedSub]
				charMap[sortedSub]++;
			}else{
				charMap[sortedSub] = 1
			}
			}
			s = s.substr(1);
	}
	console.timeEnd("timeTaken");
	return pairs;
	// //make a dict with substri
	// console.log("charMaps : ",charMaps.length)
	// while(pointer < charMaps.length){
	// 		var c = charMaps[pointer];
	// 		charMaps.forEach((b,idx)=>{
	// 			if(pointer == idx) return
	// 			if(anagram_pair_idxs.indexOf([pointer,idx].join(",")) != -1 || anagram_pair_idxs.indexOf([idx,pointer].join(",")) != -1 ) return
	// 				if(Object.keys(b).length != Object.keys(c).length) return
	// 				for(var k in c){
	// 						if(c[k]!=b[k]){
	// 								return
	// 						}
	// 				}
	// 				anagram_pair_idxs.push([pointer,idx].join(","));
	// 			})
				
	// 			pointer++;
	// }
	// console.timeEnd("timeTaken");
	// return anagram_pair_idxs.length;
	}
	tests.map(t=>{
		// console.log(minimumAbsoluteDifference(t))
		expect(sherlockAndAnagrams(...t.input)).toBe(t.expected);
		
		})
		console.log("tests completed");





