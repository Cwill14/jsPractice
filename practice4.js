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
console.log(secretPassword("mat edabi"), "BANG! BANG! BANG!")
console.log(secretPassword("m32uedadi"), "BANG! BANG! BANG!")
console.log(secretPassword("HeLen-eda"), "BANG! BANG! BANG!")
console.log(secretPassword("clarkwill"), "wkrjmm3l1")
console.log(secretPassword("rrasputin"), "upsujo18r1")
console.log(secretPassword("Garybarry"), "BANG! BANG! BANG!")

//									5/3/22

//	The Fiscal Code

/*
Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
Examples
fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"
Notes
Code letters must be uppercase.
Date of birth is given in D/M/YYYY format.
The conversion table for months is already in the starting code.
Y is not a vowel.
*/

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

function fiscalCode(person) {
	// init answer as array, will join at end
	const ans = []
	
	// // fn for name & surname
	const convertName = str => {
		let consonants = str.match(/[^aeiou]/gi)
		let vowels = str.match(/[aeiou]/gi)
		if (consonants == null) consonants = ""
		if (vowels == null) vowels = ""
		// < 3 letters => surname & name = consonant, vowel, X
		if (str.length < 3) {
			let x = consonants + vowels
			ans.push(x.length == 1 ? x + "XX" : x + "X")
		} else {
			// < 3 consonants
			if (consonants.length < 3) {
				// surname & name = consonants, vowels
				ans.push(consonants.length == 1 ? consonants + vowels[0] + vowels[1] : consonants + vowels[0])
			} else if (consonants.length === 3) {
			// if c.length === 3 => name = c
				ans.push(consonants)
			} else {
				ans.push(consonants[0])
				if (str == person.name) {
					// name = 1st, 3rd, 4th
					ans.push(consonants[2], consonants[3])
				} else {
					// surname = first 3 consonants
					ans.push(consonants[1], consonants[2])
				}
			}
		}
	}
	convertName(person.surname)
	convertName(person.name)

	// // 2 nums, 1 letter, 2 nums 
	const dateOfBirth = person.dob.split("/")
	const day = parseInt(dateOfBirth[0])
	const month = parseInt(dateOfBirth[1])
	const year = dateOfBirth[2].split("")
		// last 2 digits of year
	ans.push(year[2], year[3])
		// l = months[month in num format]
	ans.push(months[month])
		// if m
	if (person.gender == "M") {
			// if day >= 10 => day, else 0 + day
		ans.push(day >= 10 ? day : `0${day}`)
	} else {
		// if f => day + 40
		ans.push(day + 40)
	}
	// console.log("ans =", ans)
	// console.log("ans transformed = ", ans.join("").toUpperCase().split("").filter(v => v !== ",").join(""))
	return ans.join("").toUpperCase().split("").filter(v => v !== ",").join("")
}

console.log(fiscalCode({
	name: "Matt",
	surname: "Edabit",
	gender: "M",
	dob: "1/1/1900"
  }), "DBTMTT00A01")
console.log("------------------")
  console.log(fiscalCode({
	name: "Helen",
	surname: "Yu",
	gender: "F",
	dob: "1/12/1950"
  }), "YUXHLN50T41")
console.log("------------------")
  console.log(fiscalCode({
	name: "Mickey",
	surname: "Mouse",
	gender: "M",
	dob: "16/1/1928"
  }), "MSOMKY28A16")
console.log("------------------")
  console.log(fiscalCode({
	name: "Clark",
	surname: "Williams",
	gender: "M",
	dob: "14/6/1995"
  }), "WLLCRK95H14")

// 5/10/22

//  Validating a Set in the Set Game
/*
In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.
Examples
isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false
Notes
A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
You can play Set by checking the Resources tab.
*/

function isSet(cards) {
	let ans = true
	// default return is true
	// const col = cards[0].color
	// let [col, num, shad, shap] = Array(4).fill(new Set)
	let col = new Set
	let num = new Set
	let shad = new Set
	let shap = new Set
	let sets = [col, num, shad, shap]
	
	cards.forEach(card => {
		col.add(card.color)
		num.add(card.number)
		shad.add(card.shade)
		shap.add(card.shape)
	})

	sets.forEach(set => {
		// if (x.size !== 3 && x.size !== 1) {
		if (set.size == 2) ans = false
	})

	return ans
}

console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]), "true") // true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]), "true") // true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]), "false") // false

console.log(isSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]), "false") // false

console.log(isSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]), "true") //true