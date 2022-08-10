//                                                      5/12/22

// Calculate Depth of Array
/*
Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

Examples
depth([1, 2, 3, 4]) ➞ 1

depth([1, [2, 3, 4]]) ➞ 2

depth([1, [2, [3, 4]]]) ➞ 3

depth([1, [2, [3, [4]]]]) ➞ 4
*/
function depth(arr) {
	// let str = arr.toString()
	// console.log("str = ", str)
	// console.log(arr.toLocaleString())
	// console.log(Array.isArray(arr))
	// console.log("depth ran")
	let count = 1
	const recur = array => {
		console.log("recur ran on", array)
		array.map(e => {
			if (Array.isArray(e)) {
				console.log(e, "still arr")
				count++
				recur(e)
			} else {
				console.log(e, "not arr")
				return count
			}
		})
	}
	recur(arr)
	// console.log("count =", count)
	return count

}

console.log(depth([1, 2, 3, 4]), "<-- should be === 1") // 1
console.log("------------------------------------")
console.log(depth([1, [2, 3, 4]]), "<-- should be === 2") // 2
console.log("------------------------------------")
console.log(depth([1, [2, [3, 4]]]), "<-- should be === 3") // 3
console.log("------------------------------------")
console.log(depth([1, [2, [3, [4]]]]), "<-- should be === 4") // 4

// 5/13/22

// Caesar's Cipher
/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

Examples
caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20)
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
Notes
All test input will be a valid ASCII string.
*/

function caesarCipher(s, k) {
	// assign nums to letters
	const alphabet = {
		"a": 1,
		"b": 2,
		"c": 3,
		"d": 4,
		"e": 5,
		"f": 6,
		"g": 7,
		"h": 8,
		"i": 9,
		"j": 10,
		"k": 11,
		"l": 12,
		"m": 13,
		"n": 14,
		"o": 15,
		"p": 16,
		"q": 17,
		"r": 18,
		"s": 19,
		"t": 20,
		"u": 21,
		"v": 22,
		"w": 23,
		"x": 24,
		"y": 25,
		"z": 26
	}
	// split by non letter, then split each let in each word
	let z = s.match(/\W/)
	const arr = s.split(/\W/g)
	let w = arr.map(word => {
		let nArr = []
		let uppers = []
		let y = word.split("").map((letter, i) => {
			if (letter == letter.toUpperCase()) uppers.push(i)
			let nVal;
			let x = alphabet[letter.toLowerCase()] + k 
			if (x > 26) {
				nVal = x - 26
			} else {
				nVal = x
			}

	// each letter, add to new arr the letter equivalent num for current letter + k
			for (const [key, value] of Object.entries(alphabet)) {

				if (value === nVal) {
					nArr.push(key)
				}
			}
		})
		uppers.forEach(index => {
			nArr[index] = nArr[index].toUpperCase()
		})
		return nArr.join("")
	})
	return w.join(z)
	// join new arrs
}

console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5), "<-- should === 'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj'")
// "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
console.log("-----------------------------")
console.log(caesarCipher("A friend in need is a friend indeed", 20), "<-- should === 'U zlcyhx ch hyyx cm u zlcyhx chxyyx'")
// "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

//  5/18/22

// Wildcard Matching

/*
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 

Constraints:

0 <= s.length, p.length <= 2000
s contains only lowercase English letters.
p contains only lowercase English letters, '?' or '*'.
*/

const isMatch = function(s, p) {
	let match= true
	// check length. if !== and no wildcard, false
	if (s.length !== p.length && !p.split("").includes("*")) {
		match = false
	// else
	} else {
		// split both, loop & compare index against each other.
		sArr = s.split("")
		pArr = p.split("")
		for (let i = 0; i < p.length; ++i) {
			// if a *, matches any sequence
			if (pArr[i] == "*") {
				match = true
				break;
			// if it doesn't match, or match ?, false
			} else if (pArr[i] !== sArr[i] && pArr[i] !== "?") {
				match = false
				break;
			} 
		}
	}
	return match
};

console.log(isMatch("aa", "aa"), "true")
console.log("------------------")
console.log(isMatch("aa", "a"), "false")
console.log("------------------")
console.log(isMatch("aa", "*"), "true")
console.log("------------------")
console.log(isMatch("cb", "?a"), "false")
console.log("------------------")
console.log(isMatch("cb", "?b"), "true")

// 6/17/22

/*
I Made a Mistake

I made a mistake and overwrote a JSON file with some weird data, thankfully I had no back-up and I'm too lazy to fix it so now you guys can solve it for me!

Get the strings out of those arrays.

Examples
getValue([[[[[[[[[[[[[[[["Bazinga"]]]]]]]]][]]]]]]]]) ➞ "Bazinga"

getValue([[[][[[[[[[["God, what is happening"]]]]]]]]]) ➞"God, what is happening"

getValue([[[[[[[[[[[]]]]]]]]]]]) ➞ "What... why did you make this?"

getValue([[][][][][][][][[][][[[[[[["I have no idea what i'm doing"]]]]]]]]]) ➞ 
"I have no idea what i'm doing"

Notice that if there is no string, you should return a pre-defined string (see example #3).
*/ 

function getValue(input) {
	let arrs = input.split("")
	// console.log("arrs = ", arrs)
	// // slice out everything inside quotations
	// // if no quotes, return "What... why did you make this?"
	// // loop counter from front and end, find indexes, use to slice
	let first = 0
	let second = 0
	if (!arrs.includes('"')) {
		return "What... why did you make this?"
	}
	for (let i = 0; i < arrs.length; i++) {
		// console.log("forward i = ", i)
		// console.log("forward arrs[i]= ", arrs[i])
		if (arrs[i] == '"') {
			first = i
			break
		}
	}
	for (let i = arrs.length; i >= 0; i--) {
		// console.log("backward i = ", i)
		// console.log("backward = ", arrs[i])
		if (arrs[i] == '"') {
			second = i
			break
		}
	}
	// console.log("first =", first)
	// console.log("second =", second)
	let sliced = arrs.slice(first + 1, second)
	// console.log("sliced.join('') = ", sliced.join(""))
	return sliced.join("")
	// // loop, remove, stop once reaching quote, from both ends
	// // regex
}

console.log(getValue('[[[[[[[[[[[[[[[["Bazinga"]]]]]]]]][]]]]]]]]'), "Bazinga")
console.log("----------------------------------------------")
console.log(getValue('[[[][[[[[[[["God, what is happening"]]]]]]]]]'),"God, what is happening")
console.log("----------------------------------------------")
console.log(getValue('[[[[[[[[[[[]]]]]]]]]]]'), "What... why did you make this?")
console.log("----------------------------------------------")
console.log(getValue(`[[][][][][][][][[][][[[[[[["I have no idea what i'm doing"]]]]]]]]]`), 
"I have no idea what i'm doing")

//										8/2/22

/*
Weekly Salary
Write a function that takes a list of hours and returns the total weekly salary.

The input list hours is listed sequentially, ordered from Monday to Sunday.
A worker earns $10 an hour for the first 8 hours.
For every overtime hour, he earns $15.
On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.
Examples
weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400

weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410

weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280
Notes
Every element in the array is greater than or equal to 0.
*/

function weeklySalary(hours) {
	// create running total
	let salary = 0;
	// loop through array
	for (let i = 0; i < hours.length; i++) {
		// create current day total
		let current = 0;
		// if 8 or less hours, add that * 10 to current total
		if (hours[i] <= 8) {
			current += hours[i] * 10;
		} else {
		// if more than 8, add $80, add x-8 * 15
			let x = hours[i] - 8;
			current += (x * 15) + 80
		}
		// if last two indexes in arr (saturday & sunday), double current total
		if (i == 5 || i == 6) {
			current *= 2
		}
		// add current total to weekly total
		salary += current
	}
	return salary
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]), " should be 400") // 400

console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]), " should be 410") // 410

console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]), " should be 280") // 280

// 			8/9/22

/*
Text Editor Part 1

We're going to create a text editor similar to Microsoft Word. The editor autosaves so that the user only loses a small amount of data if a crash occurs.

We want to be able to handle as many operations as needed, but they have to be processed in order. There are two basic operations that our editor understands:

An insert operation contains the text to be inserted and the position to insert it at.
A delete operation contains the position to delete from and the length of the text to delete.
Write a function that takes a list of operations, either insert or delete, and returns the combined text.

Examples
[Insert("foo", 0), Insert(" bar", 3)] ➞ "foo bar"

[Insert("foo bar", 0), Delete(4, 2)] ➞ "fobar"
Notes
Keep in mind that each operation will have data that assumes the previous operations were already processed.
*/

// Input will be an array of objects of the form:
// {operation: "insert", text: string, position: number}
// {operation: "delete", from: number, length: number}
function edit(operations) {
	let doc = ""
	// let docArr = []
	operations.forEach(op => {
		// console.log("op = ", op)
		// console.log("op.operation = ", op.operation)
		// let docArr = doc.split("")
		// console.log("docArr = ", docArr)
		let docArr = doc.split("")
		if (op.operation == "insert") {
			// splice isn't working yet on insert for some reason
			// console.log("op.position = ", op.position)
			// console.log("op.text = ", op.text)
			// // doc.split("").splice(0, 0, "foo").join("")
			// // docArr.splice(0, 0, "foo")
			// doc = docArr.splice(op.position, 0, op.text).join("")
			// console.log("x = ", x)
			// console.log("docArr after op: ", docArr)
			// console.log("doc after op: ", doc)
			
			// using substrings:
			// /*
			let preSub = doc.substring(0, op.position)
			let postSub = doc.substring(op.position)
			// console.log("preSub = ", preSub)
			// console.log("postSub = ", postSub)
			doc = preSub + op.text + postSub
			// */
			// console.log("doc after insert= ", doc)
			
			
		} else if (op.operation == "delete") {
			// console.log("op.from = ", op.from)
			// console.log("op.length = ", op.length)
			docArr.splice(op.from - op.length, op.length)
			doc = docArr.join("")
			// console.log("doc after delete = ", doc)
			
		}
		// console.log("doc after op: ", doc)
		// console.log("doc.split = ", doc.split(""))
	})
	return doc
	// split, use splice, join
}

console.log(edit([{operation: "insert", text: "foo", position: 0}, {operation: "insert", text: " bar", position: 3}])) // "foo bar"

console.log(edit([{operation: "insert", text: "foo bar", position: 0}, {operation: "delete", from: 4, length: 2}])) // "fobar"
