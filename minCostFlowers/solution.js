const tests = require("./test-cases.js").tests
const expect =require("expect");
/**
 * A group of friends want to buy a bouquet of flowers. The florist wants to maximize his number of new customers and the money he makes. To do this, he decides he'll multiply the price of each flower by the number of that customer's previously purchased flowers plus . The first flower will be original price, , the next will be  and so on.

Given the size of the group of friends, the number of flowers they want to purchase and the original prices of the flowers, determine the minimum cost to purchase all of the flowers.

For example, if there are  friends that want to buy  flowers that cost  each will buy one of the flowers priced  at the original price. Having each purchased  flower, the first flower in the list, , will now cost . The total cost will be .

Function Description

Complete the getMinimumCost function in the editor below. It should return the minimum cost to purchase all of the flowers.

getMinimumCost has the following parameter(s):

c: an array of integers representing the original price of each flower
k: an integer, the number of friends
 * @param {number} k an integer, the number of friends
 * @param {number[]} c an array of integers representing the original price of each flower
 */
function getMinimumCost(k, c) {
  //round 1
  let cost=0;
  c = c.sort((a, b) => (a > b ? -1 : 1));
  let alloc = {};

	var personCounter = 1
	for(var i=0;i<c.length;i++){
		personCounter = personCounter == k ? 1: personCounter+1;
		var person = c[personCounter-1];
		if(alloc[person]){
			alloc[person] = {total:alloc[person]["total"] + ((alloc[person]["count"] + 1) * c[i]),count:alloc[person].count+1}
		}else{
      alloc[person] = { total: c[i], count: 1 };
		}
	}

	for(var p in alloc){
		cost += alloc[p].total
	}
	return cost;
}

tests.forEach((t)=>{
	expect(getMinimumCost(...t.inputs)).toBe(t.expected)
})
console.log("tests passed")