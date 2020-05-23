const expect = require("expect")
var tests = require("./test-cases.js").tests;
// console.log(tests)
/**
Function Description

Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.

minimumAbsoluteDifference has the following parameter(s):

n: an integer that represents the length of arr
arr: an array of integers
*/
// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    // var diffs = arr.reduce((d,i,idx)=>{
    //     arr.forEach((a,index)=>{
    //     if(idx == index) return;
    //     d.push(Math.abs(i - a))
    //     })
    //     return d;
    // },[])
    // return Math.min(...diffs);
    // var leastDiff
    // arr.forEach(function(i,idx){
    //     arr.forEach((a,index)=>{
    //                if(idx == index) return;
    //                var newDiff = Math.abs(i - a)
    //     leastDiff = newDiff > leastDiff ? leastDiff : newDiff
    //     })
    // })
    // return leastDiff;

    var leastDiff;
    var sortedArr = arr.sort((a,b)=>a>b ? -1 : 1)
    for(var i = 0; i< sortedArr.length-1;i++){
        // console.log(i,sortedArr[i]);
        var newDiff = Math.abs(sortedArr[i] - sortedArr[i+1])
        leastDiff = newDiff > leastDiff ? leastDiff:newDiff
    }
    return leastDiff;
}

tests.map(t=>{
// console.log(minimumAbsoluteDifference(t))
expect(minimumAbsoluteDifference(t.input)).toBe(t.expected);

})
console.log("tests completed")
