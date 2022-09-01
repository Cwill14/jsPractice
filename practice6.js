// Broken Keyboard
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)
// Examples
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
// Notes
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.

function findBrokenKeys(str1, str2) {
    // compare each char from each str
    // if they don't match, add to set str1 char
        const arr1 = str1.split(""), arr2 = str2.split("")
        const set = new Set()
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                set.add(arr1[i])
            }
        }
        return set
    }
    
    console.log(findBrokenKeys("happy birthday", "hawwy birthday")) // ["p"]
    console.log(findBrokenKeys("starry night", "starrq light")) // ["y", "n"]
    console.log(findBrokenKeys("beethoven", "affthoif5")) // ["b", "e", "v", "n"]

// Highest Pair
// You will be given a collection of five cards (representing a player's hand in poker). If your hand contains at least one pair, return an array of two elements: true and the card number of the highest pair (trivial if there only exists a single pair). Else, return false.

// Examples
// highestPair(["A", "A", "Q", "Q", "6" ]) ➞ [true, "A"]

// highestPair(["J", "6", "3", "10", "8"]) ➞ false

// highestPair(["K", "7", "3", "9", "3"]) ➞ [true, "3"]

// highestPair(["K", "9", "10", "J", "Q"]) ➞ false

// highestPair(["3", "5", "5", "5", "5"]) ➞ [true, "5"]
// Notes
// Hands with three or more of the same card still count as containing a pair (see the last example).

function highestPair(cards) {
	// creates obj to store count of each card. If multiple, add to set.
	const pairVals = new Set()
	const obj = {}
	for (let index in cards) {
		if (!obj[cards[index]]) {
			obj[cards[index]] = 1
		} else {
			obj[cards[index]] += 1
			pairVals.add(cards[index])
		}
	}
	// if no pairs, return false
	if (pairVals.size == 0) {
		return false
	} else if (pairVals.size == 1) {
		// return only value in set if there is only 1 pair
		return [true, Array.from(pairVals)[0]]
	} else {
		// tests if face card. if yes, replace that face card in set w/ equivalent numerical val
		const faceVals = {
			"A": 14,
			"K": 13,
			"Q": 12,
			"J": 11
		}
		pairVals.forEach(val => {
			if (/\D/.test(val)) {
				pairVals.add(faceVals[val])
				pairVals.delete(val)
			}
		})
		// turns into array, sorts numerically, returns highest(which is last) number as x
		let x = Array.from(pairVals).sort((a, b) => a - b).pop()
		// returns face card associated w/ x
		for (const [key, value] of Object.entries(faceVals)) {
			if (x == value) {
				return [true, `${key}`]
			} 
		}
		return [true, `${x}`]
	}
}

// SOLUTION 2

function highestPair(cards) {
	// convert faces to nums
	const faceVals = {
		"A": 14,
		"K": 13,
		"Q": 12,
		"J": 11
	}
	const converted = []
	cards.map(c => {
		if (/\D/.test(c)) {
			converted.push(parseInt(faceVals[c]))
		} else {
			converted.push(parseInt(c))
		}
	})
	// sort
	let sorted = converted.sort((a, b) => a - b)
	// compare against index 0
	let highest = sorted[0]
	let pair = false
	// if match, set as pair; if greater than current highest val, update to new highest val
	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i] === highest) {
			pair = sorted[i]
		} else if (sorted[i] > highest) {
			highest = sorted[i]
		}
	}
	// if still no match at end, return false
	if (!pair) {
		return false
	} 
	// if answer is face, convert back to letter
	let x = `${pair}`;
	if (pair > 10) {
		switch (pair) {
			case 14:
				x = "A"
				break
			case 13:
				x = "K"
				break
			case 12:
				x = "Q"
				break
			case 11:
				x = "J"
				break
		}
	}
	return [true, x]
}

console.log(highestPair(["A", "A", "Q", "Q", "6" ])) // [true, "A"]
console.log(highestPair(["J", "6", "3", "10", "8"])) // false
console.log(highestPair(["K", "7", "3", "9", "3"])) // [true, "3"]
console.log(highestPair(["K", "9", "10", "J", "Q"])) // false
console.log(highestPair(["3", "5", "5", "5", "5"])) // [true, "5"]
console.log(highestPair(["K", "10", "10", "K", "5"])) // [true, "K"]
console.log(highestPair(["7", "10", "10", "7", "5"])) // [true, "10"]
console.log(highestPair(["7", "6", "10", "7", "5"])) // [true, "7"]

/*
Majority Vote
Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

Examples
majorityVote(["A", "A", "B"]) ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null
Notes
The frequency of the majority element must be strictly greater than 1/2.
If there is no majority element, return null.
If the array is empty, return null.
*/
function majorityVote(arr) {
	// if arr empty, return null
	if (arr.length == 0) return null
	// store votes in obj
	const obj = {}
	for (let index in arr) {
		if (obj[arr[index]]) {
			obj[arr[index]]++
		} else {
			obj[arr[index]] = 1
		}
	}
	// loop through obj
	for (const [key, value] of Object.entries(obj)) {
		// if val > n/2, return key
		if (value > arr.length / 2) {
			return key
		}
	}
	return null
	// if no majority, return null
}

console.log(majorityVote(["A", "A", "B"])) // "A"
console.log(majorityVote(["A", "B", "B", "A", "B"])) // "B"
console.log(majorityVote(["A", "A", "A", "B", "C", "A"])) // "A"
console.log(majorityVote(["A", "B", "B", "A", "C", "C"]))// null
console.log(majorityVote([]))// null

/*
Extracting Words with "-ing" Inflection
Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.

Examples
ingExtractor("coming bringing Letting sing") ➞ ["coming", "bringing", "Letting"]

ingExtractor("going Ping, king sHrink dOing") ➞ ["going", "dOing"]

ingExtractor("zing went ring, ding wing SINk") ➞ []
Notes
Mono-syllabic means a word containing just one syllable.
It's probably best to use RegEx for this challenge.
*/
function ingExtractor(string) {
	// define mono-syllabic: no vowels before the -ing?
	let ans = []
	// split string into words arr, get only the words ending with -ing
	const words = string.split(/\W/g).filter(w => /ing\b/ig.test(w))
	// loop through words
	words.map(word => {
		// for each word: split prefix and final -ing; if prefix contains vowel, add to arr
		const prefix = word.split(/ing\b/)[0]
		if (/[aeiouy]/gi.test(prefix) && prefix.length > 1) {
			ans.push(word)
		}
	})
	return ans
}

console.log(ingExtractor("coming bringing Letting sing")) // ["coming", "bringing", "Letting"]
console.log(ingExtractor("going Ping, king sHrink dOing")) // ["going", "dOing"]
console.log(ingExtractor("zing went ring, ding wing SINk")) // []
console.log(ingExtractor("ringing binged boing ying, toying vying")) // ["ringing, toying, vying"]

/*
Track the Robot (Part 2)
This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples
trackRobot(20, 30, 10, 40) ➞ [-10, 10]

trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative.
Notes
Each movement is an integer (whole number).
*/

function trackRobot(...steps) {
	// if list is empty, no moves
	let final = [0, 0]
	if (steps.length === 0) return final
	// loop through list
	for (let i = 0, d = 1; i < steps.length; i++) {
		switch (d) {
			//  1st (north) add param to y
			case 1:
				final[1] += steps[i]
				d++
				break
			// 2nd (east) add to x
			case 2:
				final[0] += steps[i]
				d++
				break
			// 3rd (south) sub from y
			case 3:
				final[1] -= steps[i]
				d++
				break
			// 4th (west) sub from x
			case 4:
				final[0] -= steps[i]
				d = 1
				break
		}
	}
	return final
}

console.log(trackRobot(20, 30, 10, 40)) // [-10, 10]
console.log(trackRobot()) // [0, 0]
console.log(trackRobot(-10, 20, 10)) // [20, -20]
console.log(trackRobot(20, 30, 10, 40)) // [-10, 10]
console.log(trackRobot(10, -10, -10, 10)) // [-20, 20]
console.log(trackRobot()) // [0, 0]
console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // [6, 5]
console.log(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0)) // [0, 3]
console.log(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5)) // [3, 0]