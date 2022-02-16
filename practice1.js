//  Javascript Practice 

//  Feb 8, 2022

/*
    A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

    The wanted word is in lowercase.
    The crowd of letters is all in uppercase.
    Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
    Examples
    detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

    detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

    detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

*/

function detectWord(str) {
	return str.match(/[a-z]/g).join("")
}

detectWord(UcUNFYGaFYFYGtNUH)


// Create a function which returns the number of true values there are in an array.

const countTrue = arr => {
    let count = 0
    arr.forEach(value => value == true && count++)
    return count
}

countTrue([true, false, false, true, false]) // 2

const countTrue2 = arr => {
    return arr.filter(x => x).length
}

countTrue2([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]) // 8

// Feb 10, 2022

/* 
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".  

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter

*/

function generation(x, y) {
	let answer = "me"
	if (x == 0) {
		return answer
	}
	if (x !== 0 && y == "m") {
		switch(x) {
  		    case -3:
    		    answer = "great grandfather"
    		    break;
  		    case -2:
                answer = "grandfather"
    		    break;
            case -1:
                answer = "father"
                break;
            case 1:
                answer = "son"
                break;
            case 2:
                answer = "grandson"
                break;
            case 3:
                answer = "great grandson"
                break;
  		    default:
    		    answer = "me"
		}
	}
	else if (x !== 0 && y == "f") {
        switch(x) {
            case -3:
              answer = "great grandmother"
              break;
            case -2:
              answer = "grandmother"
              break;
          case -1:
              answer = "mother"
              break;
          case 1:
              answer = "daughter"
              break;
          case 2:
              answer = "granddaughter"
              break;
          case 3:
              answer = "great granddaughter"
              break;
            default:
              answer = "me"
      }
	}
    return answer
}

generation(-3, "m") // "great grandfather"
generation(1, "f") // "mother"

const generation2 = (x, y) => {
    const dict = {
        3: "great grand",
        2: "grand",
        1: ""
    }
    if (x == 0) {return "me"}
    if (y == "m") {
        return `${dict[Math.abs(x)]}${x > 0 ? "father" : "son"}`
    } else if (y == "f") {
        return `${dict[Math.abs(x)]}${x > 0 ? "mother" : "daughter"}`
    } 
}


generation2(0, "m") // "me!"
generation2(-2, "f") // granddaughter

// 2/15/22

// Convenience Store

/*
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item.
Change will always be represented in the following order: quarters, dimes, nickels, pennies.
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false
*/

function changeEnough(change, amountDue) {
	// const currency = {
	// 	quarter: 0.25,
	// 	dime: 0.10,
	// 	nickel: 0.05,
	// 	penny: 0.01
	// }

	// let [quarters, dimes, nickels, pennies] = change
	// console.log(quarters, dimes, nickels, pennies)

	// let values = change.map(v => {
	// 	v * currency[]
	// })

	// let values = [(v * currency.quarter)]

	let values = [(change[0] * 0.25), (change[1] * 0.10), (change[2] * 0.05), (change[3] * 0.10)]
	console.log(values)

	let total = values[0] + values[1] + values[2] + values[3]
	console.log(total)

	return total >= amountDue
}

function changeEnough2(change, amountDue) {
	let total = change[0] * 0.25 + change[1] * 0.10 + change[2] * 0.05 + change[3] * 0.01
	console.log (total)
	return total >= amountDue
}

function changeEnough3(change, amountDue) {
	return (change[0] * 0.25 + change[1] * 0.10 + change[2] * 0.05 + change[3] * 0.01) >= amountDue
}

// function changeEnough4(change, amountDue) {
// 	return change.reduce(

// 	, 0) >= amountDue
// }

console.log(changeEnough3([25, 20, 5, 0], 4.25))
console.log(changeEnough3([2, 100, 0, 0], 14.11))

//
