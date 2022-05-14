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