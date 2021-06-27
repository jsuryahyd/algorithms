const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
 * 
 *

 * @param {number[]} a 
 * @param {number} m 
 */

function migratoryBirds(arr) {
    const repetitions = {}
    for(let i of arr){
        if(repetitions[i])
        repetitions[i] += 1
        else repetitions[i]=1
    }
    const max = Math.max(...Object.values(repetitions));
    return Math.min(...Object.entries(repetitions).filter(([,val])=>val === max).map(([k,v])=>Number(k)));
}

tests.map(t=>{
	expect(migratoryBirds(...t.inputs)).toBe(t.expected[0]);
})

console.log("tests completed")