const expect = require("expect")
var tests = require("./test-cases.js").tests;

/**
 * 
 *You will be given a list of integers, , and a single integer . You must create an array of length  from elements of  such that its unfairness is minimized. Call that array . Unfairness of an array is calculated as

Where:
- max denotes the largest integer in 
- min denotes the smallest integer in 

As an example, consider the array  with a  of . Pick any two elements, test .

Testing for all pairs, the solution  provides the minimum unfairness.

Note: Integers in  may not be unique.

Function Description

Complete the maxMin function in the editor below. It must return an integer that denotes the minimum possible value of unfairness.

maxMin has the following parameter(s):

k: an integer, the number of elements in the array to create
arr: an array of integers .
 */



function maxMin(k, arr) {
	//find least diff
	console.log(k,arr.length)
	//sort
	arr = arr.sort((a,b)=>{
			return a>b ? -1:1
	})
	// var subarr = arr.slice(0,k);
	var leastDiff = Math.abs(arr[0] - arr[k]);
	// console.log(arr)
	//get min diff
	for(var i=0;i<=(arr.length-k);i++){
		var tempSubarr = arr.slice(i,i+k);
		var diff = Math.abs(tempSubarr[0] - tempSubarr[tempSubarr.length-1])
		// if(Math.min(...tempSubarr) == Math.max(...tempSubarr)){
		// 	continue
		// }
			if(diff <= leastDiff){
				// subarr = tempSubarr //unnecesarry
				leastDiff = diff
			}
	}
	return leastDiff;
}

tests.map((t,idx)=>{
	console.time("test"+idx)
	// console.log(minimumAbsoluteDifference(t))
	expect(maxMin(t.input[0],t.input[1])).toBe("integer");
	console.timeEnd("test"+idx)
	})
	console.log("tests passed")