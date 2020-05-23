const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory. Each contest is described by two integers,  and :

 is the amount of luck associated with a contest. If Lena wins the contest, her luck balance will decrease by ; if she loses it, her luck balance will increase by .
 denotes the contest's importance rating. It's equal to  if the contest is important, and it's equal to  if it's unimportant.
If Lena loses no more than  important contests, what is the maximum amount of luck she can have after competing in all the preliminary contests? This value may be negative.

For example,  and:

Contest		L[i]	T[i]
1		5	1
2		1	1
3		4	0
If Lena loses all of the contests, her will be . Since she is allowed to lose  important contests, and there are only  important contests. She can lose all three contests to maximize her luck at . If , she has to win at least  of the  important contests. She would choose to win the lowest value important contest worth . Her final luck will be .

Function Description

Complete the luckBalance function in the editor below. It should return an integer that represents the maximum luck balance achievable.

luckBalance has the following parameter(s):

k: the number of important contests Lena can lose
contests: a 2D array of integers where each  contains two integers that represent the luck balance and importance of the  contest.

*/
// Complete the luckBalance function below.
function luckBalance(k, contests) {
  let initialLuck = contests
    .filter((c) => c[1] == 0)
    .reduce((t, c) => {
      t = t + c[0];
      return t;
    },0);
  //remove highest imp contests limited to k-num and add to luck

  //get highest lucked - imp contests
  const highestLuckedImp = contests
    .filter((c) => c[1] == 1)
    .sort((a, b) => (a[0] > b[0] ? -1 : 1));
  const allowedImpToLose = highestLuckedImp.slice(0, k);
  const notAllowedToLose = highestLuckedImp.slice(k)
  let totalLuck = allowedImpToLose.reduce((t, i) => {
    t = t + i[0];
    return t;
  }, initialLuck);

//   subtract won contests luck 
return notAllowedToLose.reduce((t, i) => {
    t = t - i[0];
    return t;
  }, totalLuck);
}

tests.map((t)=>{
    expect(luckBalance(...t.input)).toBe(t.expected);
})
console.log("tests passed")