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