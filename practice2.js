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

// version 1

function wordRank(str) {
	// establish letter-point value reference
	const dict = {
		"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26
	}
	// establish word score storage & starting high score
	let scores = {}
	let highestScore = 0
	// separate string into individual words
	let strArr = str.split(" ")
	// iterate through each word
	strArr.map(word => {
		// separate each word into the letter only characters
		let wordArr = word.split("").filter(c => {
			// regex that returns true if letter only (case insensitive) character
			return /[a-z]/ig.test(c)
		})
		// store the word now w/o non letter chars so that final return is only the word
		let correctWord = wordArr.join("")
		// create running counter for total score for the word
		let currWordScore = 0
		// iterate through characters
		wordArr.map(char => {
			// add the value of selected character to running total
			currWordScore += dict[char.toLowerCase()]
		})
		// once word total calculated, store that word score & word in storage for reference oustide map
		scores[currWordScore] = correctWord
		// if the word total score is new highest score, set new high score
		if (currWordScore > highestScore) highestScore = currWordScore
	})
	// once all iterations complete, return the word from storage that is associated with the highest score
	return scores[highestScore]
}

console.log(wordRank("Quick brown fox")) // brown
console.log(wordRank("Nancy is very pretty")) // pretty
console.log(wordRank("Check back tomorrow, man")) // tomorrow
console.log(wordRank("Wednesday is hump day.")) // Wednesday

// 															3/3/22

/*
Return the Most Expensive Piece of Jewellery

You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.

Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

Examples
mostExpensive ({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
}) ➞  "The most expensive one is the Pearl Necklace"

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
}) ➞ "The most expensive one is the Diamond Ring"
Notes
There will always be at least one item in the object.
There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).

*/

// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3), or Math.max(...arr) //

// VERSION 1

function mostExpensive(obj) {
	// console.log("obj =", obj)
	let vArr = Object.values(obj)
	// console.log("vArr =", vArr)
	let kArr = Object.keys(obj)
	// console.log("kArr =", kArr)
	let highestPrice = 0
	// console.log("highestPrice before =", highestPrice)
	let index = 0
	for (let i = 0; i < vArr.length; i++) {
		if (vArr[i] > highestPrice) highestPrice = vArr[i]
		index = i
	}
	// console.log("highestPrice after =", highestPrice)
	// console.log("index =", index)
	return `The most expensive one is the ${kArr[index]}`
}

console.log(mostExpensive({
	"Diamond Earrings": 980,
	"Gold Watch": 250,
	"Pearl Necklace": 4650
  })) // "The most expensive one is the Pearl Necklace"
  
  console.log(mostExpensive({
	"Silver Bracelet": 280,
	"Gemstone Earrings": 180,
	"Diamond Ring": 3500
  })) // The most expensive one is the Diamond Ring"

// 		VERSION 2

function mostExpensive2(obj) {
	let tuples = Object.entries(obj)
	let highestPrice = 0
	let highestPriceBook = ""
	// console.log("tuples =", tuples)

	// for (let tuple in obj) {
	// 	if (obj[tuple] > highestPrice) {
	// 		highestPrice = obj[tuple]
	// 		highestPriceBook = tuple
	// 	}
	// }
	// or
	for (const [book, price] of tuples) {
		if (price > highestPrice) {
			highestPrice = price
			highestPriceBook = book
		}
	}
	return `The most expensive one is the ${highestPriceBook}`
}

console.log(mostExpensive2({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
})) // "The most expensive one is the Pearl Necklace"

console.log(mostExpensive2({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
})) // The most expensive one is the Diamond Ring"