//               4/27/22
// Numbers to English
/*
Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.

Examples
numToEng(0) ➞ "zero"

numToEng(18) ➞ "eighteen"

numToEng(126) ➞ "one hundred twenty six"

numToEng(909) ➞ "nine hundred nine"
Notes
There are no hyphens used (e.g. "thirty five" not "thirty-five").
The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
*/

function numToEng(n) {
	// start w/ blank answer so we can combine returns
	let ans = ""
	// separate digits into an array
	let arr = n.toString().split("").map(x => parseInt(x))
	// determine by length/index which variant to use
	let l = arr.length
		// 1's place:
			// if l > 1 && ends in 0, remove
			// if l == 2 && 10's place is 1, remove
		// 10's place:
			// if 1, change to teen variant, replace/remove last digit
			// otherwise be 10s variant
		// if 100's place, add word "hundred"

	// reverse the order, work from 100's => 10's => 1's
	
	// fns to convert num into string
	const convertSingle = num => {
		switch (num) {		
			case 0:
				return "zero"
			case 1:
				return "one"
			case 2:
				return "two"
			case 3:
				return "three"
			case 4:
				return "four"
			case 5:
				return "five"
			case 6:
				return "six"
			case 7:
				return "seven"
			case 8:
				return "eight"
			case 9:
				return "nine"
			default:
				return "not a number"
		}
	}
	const convertDouble = num => {
		switch (num) {
				case 1:
					return "ten"

				case 2:
					return "twenty"

				case 3:
					return "thirty"

				case 4:
					return "forty"

				case 5:
					return "fifty"

				case 6:
					return "sixty"

				case 7:
					return "seventy"

				case 8:
					return "eighty"

				case 9:
					return "ninety"

				default:
					return ""
		}
	}
	const convertTeens = num => {
		switch (num) {
			case 0:
				return "ten"
			case 1:
				return "eleven"
			case 2:
				return "twelve"
			case 3:
				return "thirteen"
			case 4:
				return "fourteen"
			case 5:
				return "fifteen"
			case 6:
				return "sixteen"
			case 7:
				return "seventeen"
			case 8:
				return "eighteen"
			case 9:
				return "nineteen"
			default:
				return ""
		}
	}
	// add edge case for 0
	if (n == 0) { return "zero"}
	// add hundreds
	if (l == 3) {
		ans = `${convertSingle(arr[0])} hundred`
	}
	// teens
	if (arr[l-2] == 1){
		ans += ` ${convertTeens(arr[l-1])}`
	} 
	// if not teen
	else {
			ans += ` ${convertDouble(arr[l-2])}`
		// if doesnt end in 0, add single digit
			if (arr[l-1] !== 0) {
				ans += ` ${convertSingle(arr[l-1])}`
			}
	}

	// remove any empty spaces at beginning
	let ansArr = ans.split(" ")
	while (ansArr[0] == "") {
		ansArr.shift()
	}
	return ansArr.join(" ")
}

console.log(numToEng(0), "<= should be: zero")
console.log("------------")
console.log(numToEng(7), "<= should be: seven")
console.log("------------")
console.log(numToEng(10), "<= should be: ten")
console.log("------------")
console.log(numToEng(12), "<= should be: twelve")
console.log("------------")
console.log(numToEng(30), "<= should be: thirty")
console.log("------------")
console.log(numToEng(44), "<= should be: forty four")
console.log("------------")
console.log(numToEng(126), "<= should be: one hundred twenty six")
console.log("------------")
console.log(numToEng(510), "<= should be: five hundred ten ")
console.log("------------")
console.log(numToEng(811), "<= should be: eight hundred eleven ")
console.log("------------")
console.log(numToEng(909), "<= should be: nine hundred nine")

//										5/2/22

// Secret Agent Password

/*
Mubashir is going on a secret mission. He needs your help but you have to learn how to encode a secret password to communicate safely with other agents. Create a function that takes an argument message and returns the encoded password.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

secretPassword("mubashirh") ➞ "hsajsi13u2"
Step 1: Message length should be of nine characters containing only lowercase letters from 'a' to 'z'. If the argument doesn't meet this requirement you must return "BANG! BANG! BANG!" (Remember, there are no second chances in the spy world!)

Step 2: Divide the string into three equal parts of three characters each:

1 - mub
2 - ash
3 - irh
Step 3: Convert the first and third letter to the corresponding number, according to the English alphabets (ex. a = 1, b = 2, c = 3 ... z = 26, etc).

mub = 13u2
Step 4: Reverse the fourth, fifth, and sixth letters:

ash = hsa
Step 5: Replace seventh, eighth, and ninth letter with next letter (z will be substituted with a).

irh = jsi
Step 6: Return the string in the following order: "Part_2+Part_3+Part_1"

"hsajsi13u2"
See the below examples for a better understanding:

Examples
secretPassword("mubashirh") ➞ "hsajsi13u2"

secretPassword("mattedabi") ➞ "detbcj13a20"

secretPassword("HeLen-eda") ➞ "BANG! BANG! BANG!"
// Length is not equal to 9
// Contains characters other than lower alphabets
*/

function secretPassword(message) {
	// declard alphabet values
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
	// test if valid string
	if (message.length !== 9 || /[^a-z]/g.test(message)) {
		return "BANG! BANG! BANG!"
	}
	// split into 3 sections
	let arr = message.split("")
	let arr1 = [arr[0], arr[1], arr[2]]
	let arr2 = [arr[3], arr[4], arr[5]]
	let arr3 = [arr[6], arr[7], arr[8]]
	// section 1: convert 0 and 2 to corresponding number
	arr1[0] = alphabet[arr1[0]]
	arr1[2] = alphabet[arr1[2]]
	// section 2: reverse
	arr2 = arr2.reverse()
	// section 3:  replace w/ next letter
	let nArr3 = []
	arr3.map(val => {
		for (const [key, value] of Object.entries(alphabet)) {
			if (value == alphabet[val]+1) {
				nArr3.push(key)
			}
		}
	})
	// return in order 2, 3, 1
	let y = arr2 + nArr3 + arr1
	return y.split("").filter(c => c!== ",").join("")
}

console.log(secretPassword("mubashirh"), "hsajsi13u2")
console.log(secretPassword("mattedabi"), "detbcj13a20")
console.log(secretPassword("matTedabi"), "detbcj13a20")
console.log(secretPassword("m32uedadi"), "detbcj13a20")
console.log(secretPassword("HeLen-eda"), "BANG! BANG! BANG!")
// Length is not equal to 9
// Contains characters other than lower alphabets