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


// 													3/8/22

/*
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4
*/

//	V1
function getTotalPrice(groceries) {
	let total = 0
	groceries.map(item => {
		total = total + (item.price * item.quantity)
	})
	let t = Number.parseFloat(total.toFixed(2))
	return t
}

//	V2
const getTotalPrice = groceries => {
	let init = 0
	let total = groceries.reduce((prevValue, currValue) => {
		currValue = currValue.price * currValue.quantity
		return prevValue + currValue
	}, init)
	return Number.parseFloat(total.toFixed(2))
}

console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
])) // 4
console.log(getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
])) // 4.5
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
])) // 10.4
console.log(getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
])) // 0.3

//											3/9/22

/*
Check If the Brick Fits through the Hole
Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

doesBrickFit(1, 1, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 2, 1, 1) ➞ false

You can turn the brick with any side towards the hole.
We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
You can't put a brick in at a non-orthogonal angle.
*/

// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a,b,c, w,h) {

	if ((a <= w && b <= h) || (b <= w && a <= h)) {
		console.log("a,b or b,a work")
	}
	if ((a <= w && c <= h) || (c <= w && a <= h)) {
		console.log("a,c or c,a work")
	}
	if ((b <= w && c <= h) || (c <= w && b <= h)) {
		console.log("b,c or c,b work")
	}

	return (a <= w && b <= h) || (b <= w && a <= h) || (a <= w && c <= h) || (c <= w && a <= h) || (b <= w && c <= h) || (c <= w && b <= h)
}


console.log(doesBrickFit(1, 1, 1, 1, 1), "true") // true
console.log("-----------")
console.log(doesBrickFit(1, 2, 1, 1, 1), "true") // true
console.log("-----------")
console.log(doesBrickFit(1, 2, 2, 1, 1), "false") // false
console.log("-----------")
console.log(doesBrickFit(1, 2, 2, 2, 1), "true") // true
console.log("-----------")
console.log(doesBrickFit(1, 2, 2, 2, 2), "true") // true
console.log("-----------")
console.log(doesBrickFit(3, 2, 2, 2, 2), "true") // true
console.log("-----------")
console.log(doesBrickFit(3, 4, 3, 6, 2), "false") // false
console.log("-----------")
console.log(doesBrickFit(3, 4, 3, 4, 3), "true") // true

// 								3/11/22

/*
Positive Dominant

An array is positive dominant if it contains strictly more unique positive values than unique negative values. 
Write a function that returns true if an array is positive dominant.
0 counts as neither a positive nor a negative value.

Examples

isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

isPositiveDominant([5, 0]) ➞ true

isPositiveDominant([0, -4, -1]) ➞ false
*/

function isPositiveDominant(a) {
	let p = 0
	let n = 0
	const set = []
	a.map(v => {
		if(v > 0 && !set.includes(v)) {
			p++
			set.push(v)
		} else if (v < 0 && !set.includes(v)) {
			n++
			set.push(v)
		} 
	})
	return p > n
	? true
	: false
}

const isPositiveDominant2 = a => {
	const set = new Set(a)
	let p = 0, n = 0
	for (let i of set) {
		if (Math.sign(i) > 0) p++
		else if (Math.sign(i) < 0) n++
	}
	return p > n
}


console.log(isPositiveDominant2([1, 1, 1, 1, -3, -4]), "false")// false

console.log(isPositiveDominant2([5, 99, 832, -3, -4]), "true") // true

console.log(isPositiveDominant2([5, 0]), "true") // true

console.log(isPositiveDominant2([0, -4, -1]), "false")// false

console.log(isPositiveDominant2([2, -2]), "false") // false

//							3/12/22
/*
	Vending Machine

	Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

	The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

	The return value is an object with 2 properties:

	product: the product name that the user selected.
	change: an array of coins (can be empty, must be sorted in descending order).

	The products are fixed and you can find them in the Tests tab.
	If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
	If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
	If there's no change, return an empty array as the change.
*/

const products = [
	{ number: 1, price: 100, name: 'Orange juice' },
	{ number: 2, price: 200, name: 'Soda' },
	{ number: 3, price: 150, name: 'Chocolate snack' },
	{ number: 4, price: 250, name: 'Cookies' },
	{ number: 5, price: 180, name: 'Gummy bears' },
	{ number: 6, price: 500, name: 'Condoms' },
	{ number: 7, price: 120, name: 'Crackers' },
	{ number: 8, price: 220, name: 'Potato chips' },
	{ number: 9, price: 80,  name: 'Small snack' },
]

function vendingMachine(products, money, productNumber) {
	// determine if valid #
	let product = {}
	let change = []
	let valid = false
	products.map(p => {
		if (p.number == productNumber) {
			product = p
			valid = true
		}
	})
	if (!valid) return "Enter a valid product number"
	
	// compare price w/ money
	if (money < product.price) {
		return "Not enough money for this product"
	}
	
	// if enough, subract price. add remainder as coin values to obj
	let remainder = money - product.price
	while (remainder > 0) {
		if (remainder > 500) {
			change.push(500)
			remainder = remainder - 500
		} else if (remainder >= 200) {
			change.push(200)
			remainder = remainder - 200
		} else if (remainder >= 100) {
			change.push(100)
			remainder = remainder - 100
		} else if (remainder >= 50) {
			change.push(50)
			remainder = remainder - 50
		} else if (remainder >= 20) {
			change.push(20)
			remainder = remainder - 20
		} else if (remainder >= 10) {
			change.push(10)
			remainder = remainder - 10
		}
	}

	// add  product name to obj and return
	return { "product": product.name, "change": change }
}

console.log(vendingMachine(products, 200, 7), "? { product: 'Crackers', change: [ 50, 20, 10 ] }") // { product: "Crackers", change: [ 50, 20, 10 ] }
console.log("---------------------------------------")
console.log(vendingMachine(products, 500, 0), "? Enter a valid product number") // "Enter a valid product number"
console.log("---------------------------------------")
console.log(vendingMachine(products, 90, 1), "? Not enough money for this product") // "Not enough money for this product"
console.log("---------------------------------------")
console.log(vendingMachine(products, 500, 8), "? { product: 'Potato chips', change: [ 200, 50, 20, 10 ] }") // { product: 'Potato chips', change: [ 200, 50, 20, 10 ] }
console.log("---------------------------------------")
console.log(vendingMachine(products, 250, 4), "? { product: 'Cookies', change: [] }") // { product: 'Cookies', change: [] }