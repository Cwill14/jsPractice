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

// 													4/19/22

/*
Validate Phone Numbers

Write a function that returns true if the phone number is in a valid format. Valid formats are as follows:

With Country Code	Without Country Code
+1-892-445-7663	892-445-7663
1-892-445-7663	(892) 445-7663
1 (892) 445-7663	892.567.8901
1.892.567.8901	1/892/567/8901
1 892 567 8901	892/567/8901
18925678901	892 567 8901
Examples
validate("578-332-1114") ➞ true

validate("57-332-1114") ➞ false

validate("577 332  1114") ➞ false
// More than one space in between digits clusters.

validate("57 332 1114") ➞ false
// Unacceptable digit cluster length.

validate("157%332-1114") ➞ false
// Unacceptable delimiter.
Notes
The country code will always be +1 or 1.
Each phone number will contain either 10 or 11 digits (depending on whether the country code exists).
There must either be exactly one space, a delimiter, or no space at all between the digit clusters.
You do not have to worry about extensions.
*/

function validate(s) {
	// length/number of digits
		// split into each cluster
	// valid delimiters
		// split into cluster at delimiters

	// check if non-digits are valid delmiter
		// if yes, split into clusters at delimiter
			// 1st 2 clusters are 3, last is 4 digits

	
	let validDelimiters = ["-", "(", ")", " ", ".", "/", ") "] // valid delimiters to compare against
	// console.log(/\s|\D/ig.toString())
	
	// test length (if 13 delims, also check index0 == 1 or if 14 it starts w/ +1)
	// could also test # of digits
		// if 11, first digit == 1
	let digits = s.match(/\d/g)
	console.log(digits)
	// if (digits.length !== 10 || (digits.length == 11 && digits[0] !== 1)) {
	if (digits.length !== 10) {
		if (digits.length == 11 && digits[0] != 1) {
			console.log("failure bro")
		}
	}
	// test cluster lengths
	let clusters = s.split(/\s|\D/ig) // splits at each non digit or space
	console.log(clusters)
	// test delimiters
}


console.log(validate("578-332-1114"), true) // true
console.log("------------- 2")
console.log(validate("578-332-11114"), false) // false
console.log("------------- 3")
console.log(validate("8924457663"), true) // true
console.log("------------- 4")
console.log(validate("(892) 445-7663"), true) // true
console.log("------------- 5")
console.log(validate("57-332-1114"), false) // false
console.log("------------- 6")
console.log(validate("577 332  1114"), false) // false
// More than one space in between digits clusters.
console.log("------------- 7")
console.log(validate("1257 332 1234"), false) // false
// Unacceptable digit cluster length.
console.log("------------- 8")
console.log(validate("157%332-1114"), false) // false
// Unacceptable delimiter.


//													Insert Element in Singly Linked List in a Given Index
	
/*
Create a method in a LinkedList class called insert that adds an element to the given index of the linked list and returns the added element. The LinkedList class is created for you. The first parameter is index and the second is element to be added.

Examples
Suppose data = [1, 2, 3]    // Just for explanation.

insert(10, 10) ➞ "Element cannot be added"
// index = 10 and element = 10
// Therefore, we cannot insert 10 because index > size of
// data and return msg.

insert(-1, 10) ➞ "Element cannot be added"
// index = -1 and element = 10
// Therefore, we cannot insert 10 because index is negative
// (less than zero) return msg.

insert(0, 0) ➞ 0
// index = 0 and element = 0
// Therefore, we insert 0 at index 0 (beginning of the linked
// list) and return element.
Notes
Element is an integer.
*/


function Node(element) {
	this.element = element;
	this.next = null;
}
function LinkedList() {
	let length = 0;
	let head = null;
	
	this.push = function(element) {
		const node = new Node(element);
		if(!head){
			head = node;
			length++;
		}
		else {
			let current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
			length++;
		}
	}
	
	// Start
	this.insert = function (index, element) {
	  // check if positive, check length
		// if index 0, add as new head
		if (index == 0) {
			let prevHead = head
			head = new Node(element)
			head.next = prevHead
			length++;
		} else if (index > 0 && index <= length) {
			// iterate to index -1 so we can assign element as next for prev node
			let current = head
			let currIndex = 0
			while (currIndex < index - 1){
				current = current.next
				currIndex++
			}
			// store old next node for using later as index + 1 node
			let nElement = current.next
			// assign element as curr.next for index -1 node
			current.next = new Node(element)
			length++;
			current = current.next
			// assign curr.next as index +1 node
			current.next = nElement
		} else {
			console.log("Element cannot be added")
			return "Element cannot be added"
		}
	
	
	};
	// End
	
	this.check = function() {
		const sol = [];
		let current = head;
		while(current){
			sol.push(current.element);
			current = current.next;
		}
		return sol.join("");
	}
}

let data = new LinkedList()
data.push(1)
data.push(2)
data.push(3)
console.log(data.check())

data.insert(10, 10) // "Element cannot be added"
console.log("---------------")
data.insert(-1, 10) // "Element cannot be added"
console.log("---------------")
data.insert(0, 0) // 0 ; data = 0123
console.log(data.check())
console.log("---------------")
data.insert(2, 6) // 6 ; data = 01623
console.log(data.check())
console.log("---------------")
data.insert(5, 9) // 6 ; data = 016239
console.log(data.check())
console.log("---------------")
data.insert(4, 7) // 6 ; data = 0162739
console.log(data.check())

//								4/26/22

// Find All Digits

/*
Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".

Examples
findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0

findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
Notes
The digits can be discovered in any order.
*/

function findAllDigits(nums) {
	// create set to track digits detected
	let digits = new Set()
	// loop through arr of 4-digit nums
	for (let i = 0; i < nums.length; i++) {
		// split each num into a sub arr of nums
		let splitNum = nums[i].toString().split("").map(n => parseInt(n))
		// loop through sub arr (each digit value)
		for (let j = 0; j < 4; j++) {
			// sets will only add values if they are unique/not in set already
			digits.add(splitNum[j])
		}
		// if each digit is present (10 unique values, 0-9), return current num
		if (digits.size == 10) {
			return nums[i]
		}
	}
	// if it hasn't returned w/ answer by now, return error message
	return "Missing Digits!"
}

console.log(findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]), "5057")
// digits found:  517-  4-38  29-6  -0
console.log("----------")
console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]), "3370")
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0
console.log("----------")
console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]), "Missing digits!")
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing