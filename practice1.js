//  Javascript Practice 

//                                                                                 2/8/2022

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

//                                                                                2/10/2022

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

//                                                                              2/15/22

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

//                                                                              2/16/22

/* 
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
*/

function sevenBoom(arr) {
	let newArr = arr.join("").split("")
	return newArr.includes('7') ? "Boom!" : "there is no 7 in the array"
}

console.log(sevenBoom([2, 6, 7, 9, 3])) // boom
console.log(sevenBoom([33, 68, 400, 5])) // no
console.log(sevenBoom([86, 48, 100, 66])) // no
console.log(sevenBoom([76, 55, 44, 32])) // boom
console.log(sevenBoom([35, 4, 9, 37])) // boom

function sevenBoom2(arr) {
	return /7/.test(arr) ? "Boom!" : "there is no 7 in the array"
}

console.log(sevenBoom2([2, 6, 7, 9, 3])) // boom
console.log(sevenBoom2([33, 68, 400, 5])) // no
console.log(sevenBoom2([86, 48, 100, 66])) // no
console.log(sevenBoom2([76, 55, 44, 32])) // boom
console.log(sevenBoom2([35, 4, 9, 37])) // boom

const sevenBoom3 = arr => /7/.test(arr) ? "Boom!" : "there is no 7 in the array"

console.log(sevenBoom3([2, 6, 7, 9, 3])) // boom
console.log(sevenBoom3([33, 68, 400, 5])) // no
console.log(sevenBoom3([86, 48, 100, 66])) // no
console.log(sevenBoom3([76, 55, 44, 32])) // boom
console.log(sevenBoom3([35, 4, 9, 37])) // boom

/*
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
*/

function oddishOrEvenish(num) {
	let total = 0
	let arr = num.toString().split("")
	arr.map(value => {
		let int = parseInt(value)
		total += int
	})
	return total % 2 ? "Oddish" : "Evenish"
}

console.log(oddishOrEvenish(43), "Oddish")
console.log(oddishOrEvenish(373), "Oddish")
console.log(oddishOrEvenish(55551), "Oddish")
console.log(oddishOrEvenish(4433), "Evenish")
console.log(oddishOrEvenish(11), "Evenish")
console.log(oddishOrEvenish(211112), "Evenish")

const oddishOrEvenish2 = num => {
	let arr = Array.from(num.toString()).map(Number)
	return arr.reduce((total, value) => total + value) & 1 ? "Oddish" : "Evenish"
}

console.log(oddishOrEvenish2(43), "Oddish")
console.log(oddishOrEvenish2(373), "Oddish")
console.log(oddishOrEvenish2(55551), "Oddish")
console.log(oddishOrEvenish2(4433), "Evenish")
console.log(oddishOrEvenish2(11), "Evenish")
console.log(oddishOrEvenish2(211112), "Evenish")

//                                                      2/21/22

/*
When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

It takes 1 second to switch between pencils.
It takes 2 seconds to color a square. 

color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
*/


const colorPatternTimes = arr => {
	// loop thru colors
		// determine how many switches
			// only need to switch if diff color than prev
		// num of switches + number of squares colored (items in arr) * 2
	let switches = 0
	let color = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== color) {
			switches++
			color = arr[i]
		}
	}
	return (arr.length * 2) + switches
}


console.log(colorPatternTimes(["Blue"])) // 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])) // 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])) // 13

/*
You have cultivated a plant, and after three long months, the time has come to reap the fruits (or the flowers, in this case) of your hard work. During the growth phase, you added water and fertilizer, and kept a constant temperature. It's time to check how much the plant has grown!

A plant is represented horizontally, from the base to the left, to the end to the right:

---@---@---@
The stem is made of hyphens, and the flowers are represented by symbols. A plant always starts with the stem, and always ends with flowers.

The four given parameters are:

seed (string) determines the type of flowers generated by the plant.
water (integer) each unit of water extends the portion of stem between the flowers, and gives the total number of segments (stem + flowers) of the plant.
fert (integer) each unit of fertilizer increases the amount of flowers, grouped in clusters.
temp (integer) if the temperature recorded is between 20°C and 30°C (bounds included) the plant grows normally, otherwise all the flowers die, except for a single survivor at the end of the stem.
Given the above parameters, implement a function that returns a string representing the plant (see the examples below for a better visualization).

Examples
plant("@", 3, 3, 25) ➞ "---@@@---@@@---@@@"
// Water gives the length of the stem portions between flowers.
// Water gives the total number of segments.
// Fertilizer gives the length of flowers clusters.
// In this case the temperature is in the acceptable range 20°C | 30°C

plant("#", 1, 5, 30) ➞ "-#####"

plant("&", 5, 1, 20) ➞ "-----&-----&-----&-----&-----&"

plant("§", 3, 3, 15) ➞ "---------§"
// The temperature out of range make all flowers die, except the last one.
// The stem is not affected by temperature.
Notes
All given cases will have valid parameters for water and fert, you have to only check that temp is in the "safe" range (20°C|30°C).
*/

function plant(seed, water, fert, temp) {
	// if temp bad, return string w/ water + 1 of seed
	// design flower cluster string with params
		// flower custer length = fert
		// stem intervals = water
	// # of clusters = water
	// print plant combination
	const stem = "-"
	if (temp < 20 || temp > 30) {
		return stem.repeat(water ** 2) + `${seed}`
	} else {
		let cluster = stem.repeat(water) + `${seed}`.repeat(fert)
		return cluster.repeat(water)
	}
}

function plant2(seed, water, fert, temp) {
	return temp < 20 || temp > 30
	? "-".repeat(water ** 2) + `${seed}`
	: `${"-".repeat(water) + seed.repeat(fert)}`.repeat(water)
}

console.log(plant("#", 1, 5, 30)) // "-#####"
console.log(plant("&", 5, 1, 20)) // "-----&-----&-----&-----&-----&"
console.log(plant("§", 3, 3, 15)) // "---------§"
console.log(plant("$", 2, 2, 23)) // "--$$--$$"

//												2/22/22

/*
A stack machine processes instructions by pushing and popping values to an internal stack. A simple example of this is a calculator.

The argument passed to run(instructions) will always be a string containing a series of instructions.
The instruction set of the calculator will be this:

+: Pop the last 2 values from the stack, add them, and push the result onto the stack.
-: Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
*: Pop the last 2 values, multiply, and push the result.
/: Pop the last 2 values, divide the topmost one by the lower one, and push the result.
DUP: Duplicate (not double) the top value on the stack.
POP: Pop the last value from the stack and discard it.
PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]"
Examples
StackCalc("") ➞ 0

StackCalc("5 6 +") ➞ 11

StackCalc("3 DUP +") ➞ 6

StackCalc("6 5 5 7 * - /") ➞ 5

StackCalc("x y +") ➞ Invalid instruction: x
Notes
If there are no instructions, the value should remain 0.
The return value of get value() should be the topmost value on the stack.
*/

class StackCalc {
	constructor() {
		  
	}
	run(instructions) {
		  
	}
	get value() {
		  
	}
 }

// ---------------------

const run = str => {
	const stack = str.split(" ");
	let operator = stack.pop();
	switch (operator) {
		case "":
			return 0
		case "+":
			let operand1 = stack.pop() * 1
			let operand2 = stack.pop() * 1
			stack.push(operand1 + operand2)
			console.log(stack)
	}
}

run("5 6 +")