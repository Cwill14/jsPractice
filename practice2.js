//                 3/1/22

//  WordRank Scoring System

/*
Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

Examples
wordRank("The quick brown fox.") ➞ "brown"

wordRank("Nancy is very pretty.") ➞ "pretty"

wordRank("Check back tomorrow, man!") ➞ "tomorrow"

wordRank("Wednesday is hump day.") ➞ "Wednesday"
Notes
If two words score the same, return the word that appears first in the original string.
The returned string should only contain alphabetic characters (a-z).
Preserve case in the returned string (see 4th example above).
*/

function wordRank(str) {
	const dict = {
		"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26
	}
	// let arr = str.split("").filter(x => /[a-z])
	let strArr = str.split(" ")
	let scores = {}
	console.log(strArr, "= strArr")
	let highestScore = 0
	strArr.map((word, index) => {
		// console.log(word.filter(c => c !== /^[a-b]/ig.test(c)))
		let wordArr = word.split("")
		// let wordArr = word.split("").filter(c => {
			// console.log(c, "= c")
			// console.log(/[^a-b]/ig.test(c), "= /[^a-b]/ig.test(c)")
			// /^[a-z]/ig.test(c)
			// let x = c.toLowerCase()
			// console.log(dict.x, "= dict.x")
			// dict.x == true
		// })
		console.log(wordArr, "= wordArr")
		let currWordScore = 0
		wordArr.map(char => {
			// console.log(dict[char.toLowerCase()], "= dict[char.toLowerCase()]")
			// console.log(char, "= char")
			// console.log(/[a-z]/ig.test(char), "= /[a-z]/ig.test(char)")
			if (/[a-z]/ig.test(char)) {
				currWordScore += dict[char.toLowerCase()]
			}
		})
		console.log(word, "= word")
		console.log(currWordScore, "= currWordScore")
		scores[currWordScore] = word
		currWordScore > highestScore
			? highestScore = currWordScore
			: console.log("nope")
		// console.log(scores, "= scores")
		// console.log(x, "= x")
		// console.log(/[a-z]/i.test(x))
		// // console.log(dict[x.toLowerCase()], "= dict[x.toLowerCase()]")
		// // console.log("------")
		// if (x == /[a-z]/i.test()) {
		// 	console.log(dict[x], "= dict[x]")
		// 	sum += dict[x.toLowerCase()]
		// } else {
		// 	console.log("next pls")
		// }
	})
	// console.log(highestScore, "= highestScore")
	// console.log(scores[highestScore])
	return scores[highestScore]
}

// console.log(wordRank("Quick brown fox"))
// console.log(wordRank("Nancy is very pretty"))
console.log(wordRank("Check back tomorrow, man"))
