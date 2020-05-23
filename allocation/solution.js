
const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
 * A company has requested to streamline their product allocation strategy, and given  products, each of which has an associated value, you are required to arrange these products into segments for processing. There are infinite segments indexed as 1, 2, 3 and so on.

However, there are two constraints:

You can assign a product to a segment with index  if and only if  or the segment with index  has at least  products.
Any segment must contain either no products or at least  products.
The score for a segment is defined as the index of the segment multiplied by the sum of values of the products it contains. The score of an arrangement of products is the sum of scores of segments. Your task is to compute the maximum score of an arrangement.

Consider, for example,  products and . One optimal way to assign is -

Assign the first three products to segment 1.
Assign the next three products to segment 2.
Assign the next five products to segment 3.
Note that we can not assign 2 products to segment 4 as the second constraint would be violated. The score of the above arrangement is -

1 * (1 + 2 + 3) + 2 * (4 + 5 + 6) + 3 * (7 + 8 + 9 + 10 + 11) = 6 + 30 + 135 = 171.

Since the arrangement score can be very large, print it modulo .

 * @param {number[]} a 
 * @param {number} m 
 */


function maxScore(a, m) {
	// Write your code here
	const values = a.sort();
	const minProductsPerSeg = m;
	//max means allocate to higher index
	let allocs = []
	
	while (values.length>=m ){
			allocs.push( values.splice(0,m));
	}
	if(values.length){
			allocs[allocs.length - 1] = allocs[allocs.length - 1].concat(values);
	}
	return allocs.reduce(function(t,a,idx){
			var seg = idx+1
			t+= seg *(a.reduce((s,i)=>{s=s+i;return s},0))
			return t;
	},0)

}

tests.map(t=>{
	
	expect(maxScore(t.inputs[0],t.inputs[1])).toBe(t.expected);
	
	})
	console.log("tests completed")