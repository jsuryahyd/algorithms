const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
 * 
 *

 * @param {number[]} a 
 * @param {number} m 
 */

function strangeAdvertising(n) {
    
    let day = 1;
    let dailyLikes = Math.floor(5/2);
    let totalLikes = dailyLikes;
    let dailyShares = dailyLikes * 3
    // total = total + dailyShares;
    console.log("\x1b[42m","day, total,likes,dailyShares","\x1b[0m")
    while (day<n){
        ++day;
        dailyLikes = Math.floor(dailyShares/2);
        dailyShares = dailyLikes* 3;
        totalLikes = totalLikes + dailyLikes;
        console.log(day,dailyLikes,totalLikes,dailyShares)
    }
    return totalLikes;
}

tests.map(t=>{
	expect(strangeAdvertising(...t.inputs)).toBe(t.expected[0]);
})

console.log("tests completed")