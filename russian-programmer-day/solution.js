const expect = require("expect")
var tests = require("./test-cases.js").tests;
/**
 * 
 *Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

Divisible by 400.
Divisible by 4 and not divisible by 100.
Given a year, , find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

For example, the given  = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is .

Function Description

Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer
Input Format

A single integer denoting year .

Constraints

1700 \le y \le 2700
Output Format

Print the full date of Day of the Programmer during year  in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

Sample Input 0

2017
Sample Output 0

13.09.2017
Explanation 0

In the year  = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.

Sample Input 1

2016
Sample Output 1

12.09.2016

 * @param {number[]} a 
 * @param {number} m 
 */
const numDaysInfeb1918 = (1918 % 4 === 0 ? 29 : 28) - 13
function russianProgrammerDay(year) {
   if(year < 1918){
        let isLeapYr = year %  4 ===0
        return isLeapYr ? "12.09."+year :"13.09."+year
    }else if(year === 1918){
         return  (256 - (31+numDaysInfeb1918+31+30+31+30+31+31)) + ".09."+year; //8 months + remaining days => 9th month
    }else{
        let isLeapYr = (year %  400 ===0) || (year % 100 !== 0 && year % 4 === 0)
        return isLeapYr ? "12.09."+year :"13.09."+year
    }
}

tests.map(t=>{
	expect(russianProgrammerDay(...t.inputs)).toBe(t.expected[0]);
})

console.log("tests completed")