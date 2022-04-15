//                                      4/11/22

/*
Awarding Prizes
You are given a dictionary of names and the amount of points they have. Return a dictionary with the same names, but instead of points, return what prize they get.

"Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. For all the other names, return "Participation" for the prize.

Examples
awardPrizes({
  "Joshua" : 45,
  "Alex" : 39,
  "Eric" : 43
}) ➞ {
  "Joshua" : "Gold",
  "Alex" : "Bronze",
  "Eric" : "Silver"
}

awardPrizes({
  "Person A" : 1,
  "Person B" : 2,
  "Person C" : 3,
  "Person D" : 4,
  "Person E" : 102
}) ➞ {
  "Person A" : "Participation",
  "Person B" : "Participation",
  "Person C" : "Bronze",
  "Person D" : "Silver",
  "Person E" : "Gold"
}

awardPrizes({
  "Mario" : 99,
  "Luigi" : 100,
  "Yoshi" : 299,
  "Toad" : 2
}) ➞ {
  "Mario" : "Bronze",
  "Luigi" : "Silver",
  "Yoshi" : "Gold",
  "Toad" : "Participation"
}
Notes
There will always be at least three participants to recieve awards.
No number of points will be the same amongst participants.
*/

function awardPrizes(names) {
	// let gold = ""
	// let silver = ""
	// let bronze = ""
	let ans = {}
	// console.log(Object.values(names).sort((a, b) => b - a))
	let sortedNums = Object.values(names).sort((a, b) => b - a)
	console.log(sortedNums)
	// for (const key of Object.keys(names)) {
 //    console.log(key, names[key]);
	// };
	// Object.entries(names).forEach(
 //    ([key, value]) => console.log(key, value)
	// );
	for (const [key, value] of Object.entries(names)) {
    console.log(key, value);
		if (value == sortedNums[0]) {
			ans[key] = "Gold"
		} else if (value == sortedNums[1]) {
			ans[key] = "Silver" 
		} else if (value == sortedNums[2]) {
			ans[key] = "Bronze"
		} else {
			ans[key] = "Participation"
		}
	}
	return ans
}


console.log(awardPrizes({
    "Mario" : 99,
    "Luigi" : 100,
    "Yoshi" : 299,
    "Toad" : 2
}))
/*
	{
  "Mario" : "Bronze",
  "Luigi" : "Silver",
  "Yoshi" : "Gold",
  "Toad" : "Participation"
}
	*/

  //                          4/13/22

  /*
  Balanced Words

  We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

  Write a function that returns true if the word is balanced, and false if it's not.

  Examples
  balanced("zips") ➞ true
  // "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

  balanced("brake") ➞ false
  // "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
  Notes
  All words will be lowercase, and have a minimum of 2 characters.
  Palindromic words will always be balanced.
*/

function balanced(word) {
	// create letter values
	const values = {
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
	// split into array
	let arr = word.toLowerCase().split("")
	console.log(arr)
	// add edge case for palindromes
	if (arr.join("") === arr.reverse().join("")) {
		return true
	}
	// convert to nums
	nArr = arr.map(value => {
		// console.log("values[value] =", values[value])
		return value = values[value]
	})
	// create first half of array
	let arr1 = nArr.slice(0, Math.floor((nArr.length / 2)))
	// create second half
	let arr2 = []
	// if word length odd number, second array ignores middle value
	if (nArr.length % 2 !== 0) {
		arr2 = nArr.slice(Math.floor(nArr.length / 2) + 1)
	} else {
		arr2 = nArr.slice(Math.floor(nArr.length / 2))
	}
	console.log("arr1 = ", arr1)
	console.log("arr2 = ", arr2)
	// add up values
	const r = array => {
		 return array.reduce((total, curr) => {
			 return total + curr
		})
	}
	console.log("r(arr1) =", r(arr1))
	console.log("r(arr2) =", r(arr2))
	// compare and return
	return r(arr1) === r(arr2)
}

console.log(balanced("zips")) // true
console.log(balanced("brake")) // false
console.log(balanced("BraVe")) // false
console.log(balanced("racecar")) // true

/*
Tic Tac Toe

Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.
Examples
ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
]) ➞ "X"

ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) ➞ "O"

ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]) ➞ "Draw"
Notes
Make sure that if O wins, you return the letter "O" and not the integer 0 (zero) and if it's a draw, make sure you return the capitalised word "Draw". If you return "X" or "O", make sure they're capitalised too.
*/

function ticTacToe(board) {
	// default return to "Draw"
	let winner = "Draw"
	// define subarrs for clarity
	let sub1 = board[0]
	let sub2 = board[1]
	let sub3 = board[2]
	// check rows
	// using foreach since subarrs are already separated, checking one subarr at a time
	const checkRows = sub => {
		if (sub[0] === sub[1] && sub[0] == sub[2]) {
			winner = sub[0]
		}
	}
	board.forEach(subarray => checkRows(subarray))
	// check columns
	// using loops since they are checking bewtten diff sub arrays, 3 times
	for (let i = 0; i < 2; i++) {
		if (sub1[i] === sub2[i] && sub1[i] == sub3[i]) {
			winner = sub1[i]
		}
	}
	// check diagonals
	// only 2 possible wins, combining into one if statement
	if ((sub1[0] === sub2[1] && sub1[0] == sub3[2]) || (sub1[2] === sub2[1] && sub1[2] == sub3[0])) {
		// middle is consistent in diagonal wins
		winner = sub2[1]
	}
	return winner
}



console.log(ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
])) // "diagonal, X"
console.log("diagonal, X")
console.log(ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
])) // "row, O"
console.log("row, O")
console.log(ticTacToe([
  ["O", "X", "O"],
  ["O", "X", "X"],
  ["E", "X", "0"]
])) // "column, X"
console.log("column, X")
console.log(ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
])) // "Draw"
console.log("Draw")