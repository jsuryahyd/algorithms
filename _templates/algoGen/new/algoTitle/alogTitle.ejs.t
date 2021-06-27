---
to: <%=algoName%>/solution.js
---

const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
 * 
 *

 * @param {number[]} a 
 * @param {number} m 
 */

function <%=h.changeCase.camel(algoName)%>() {

}

tests.map(t=>{
	expect(Solution(...t.inputs)).toBe(t.expected[0]);
})

console.log("tests completed")