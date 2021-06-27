const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
 * 
 *

 * @param {number[]} a 
 * @param {number} m 
 */

function saveThePrisoner(numPrisoners,numChocolates,startingIdx) {
    console.log(numPrisoners,numChocolates,startingIdx);
    return solution2(numPrisoners,numChocolates,startingIdx);
}
function solution2(numPrisoners,numChocolates,startingIdx){
    console.log("remainder",numChocolates%numPrisoners,"startingIdx ",startingIdx);
    return (numChocolates + startingIdx - 1) % numPrisoners || numPrisoners
}
function solution1(numPrisoners,numChocolates,startingIdx){
    let prisonerIdx = startingIdx-1
    while(numChocolates>0){      
        if(prisonerIdx==numPrisoners){
          prisonerIdx=1;      
        }else{
        ++prisonerIdx;    
        }
        //chocolate given, and moving farward
        numChocolates--;
        // console.log(" prisoner num:",prisonerIdx,"remaining chocolates -- ",numChocolates);
    }
    return prisonerIdx;
}

tests.map(t=>{
	expect(saveThePrisoner(...t.inputs)).toBe(t.expected[0]);
})

console.log("tests completed")