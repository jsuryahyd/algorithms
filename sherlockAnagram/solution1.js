const expect = require("expect")
var tests = require("./test-cases.js").tests;
const util = require("util");
"use strict";
let loops = 0
const
    ALPHABET_SIZE = 26,
    LOWEST_CHAR   = "a".charCodeAt(0);

function toShiftedBuffer(s) {
    const arr = Array
        .from(Buffer.from(s))
        .map(x => x - LOWEST_CHAR);

    return Buffer.from(arr);
}

function getNumAnagramicPairsN(buf, n) {
    let count = 0;
    const
        counts = (Buffer.alloc(ALPHABET_SIZE)).fill(0),
        strs   = {};

    for (let i = 0; i < n; i += 1) {
        counts[buf[i]] += 1;
    }
    strs[counts] = 1;

    for (let i = 1, x, c; i <= buf.length - n; i += 1) {
			loops++;
        counts[buf[i - 1]] -= 1;
        counts[buf[i + n - 1]] += 1;
        c = strs[counts];

        if (c) {
            count += c;
            strs[counts] = c + 1;
        } else {
            strs[counts] = 1;
        }
    }

    return count;
}

function getNumAnagramicPairs(s) {
	console.time("timeTaken");
    const buf = toShiftedBuffer(s);
    let count = 0;

    for (let n = 1; n < s.length; n += 1) {
        count += getNumAnagramicPairsN(buf, n);
    }
		console.timeEnd("timeTaken");
		console.log("loops",loops)
    return count;
}
tests.map(t=>{
	// console.log(minimumAbsoluteDifference(t))
	expect(getNumAnagramicPairs(...t.input)).toBe(t.expected);
	
	})
	console.log("tests completed");