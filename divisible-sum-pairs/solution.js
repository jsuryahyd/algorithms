const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
 * 
 *

 * @param {number[]} a 
 * @param {number} m 
 */

function divisibleSumPairs(k,ar) {
   let i=0;
   let allpairs = []
   while(i<ar.length){
      let j=i+1;
      while(j<ar.length){
         allpairs.push([ar[i],ar[j]]);
         j++;
      }
      i++;
   }
   const pairs = allpairs.filter(p=>(p[0]+p[1])%k==0);
   // console.log(pairs);
   return pairs.length;
}

tests.map(t=>{
	expect(divisibleSumPairs(...t.inputs)).toBe(t.expected[0]);
})

console.log("tests completed")