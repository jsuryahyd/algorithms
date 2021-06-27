const expect = require("expect")
var tests = require("./test-cases.js").tests;


/**
You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

For example, given the arrays a=[2,6] and b=[24,36], there are two numbers between them: 6 and 12. 6%2=0, 6%6=0,24%6=0,36%6=0  for the first value. Similarly, for 12 also.
*/
function getTotalX(a, b) {
    // Write your code here
const range = [Math.max(...a),Math.min(...b)];
let i=range[0];
let result=0;
    console.log(a,b,range);
    // return 0;
while (i<=range[1]){
    let isMultiple,isFactor = false;
    for(var f of a){
        // if(i%f != 0) break;
        if(i%f == 0){
            isFactor = true;
            // console.log(`${f} is factor of ${i}`)
        }else{
            isFactor = false;
            break;
        }
    }
    if(!isFactor) {i++;continue;}
    for(var m of b){
        if(m%i ==0){
            isMultiple =  true;
            // console.log(`${m} is multiple of ${i}`)
        }else{
            isMultiple = false;
            break;//should not go over the array anymore since, if next item satisfies, isMultiple will be true again.
        }
    }
    // console.log("both",i);
    if(isFactor && isMultiple) result++;
    i++;
}
console.log("result",result)
return result;
}

tests.map(t=>{
    // console.log(minimumAbsoluteDifference(t))
    expect(getTotalX(...t.input)).toBe(t.expected);
    
    });
    console.log("tests completed");