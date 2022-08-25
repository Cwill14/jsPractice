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

console.log(highestPair(["A", "A", "Q", "Q", "6" ])) // [true, "A"]
console.log(highestPair(["J", "6", "3", "10", "8"])) // false
console.log(highestPair(["K", "7", "3", "9", "3"])) // [true, "3"]
console.log(highestPair(["K", "9", "10", "J", "Q"])) // false
console.log(highestPair(["3", "5", "5", "5", "5"])) // [true, "5"]
console.log(highestPair(["K", "10", "10", "K", "5"])) // [true, "K"]
console.log(highestPair(["7", "10", "10", "7", "5"])) // [true, "10"]
console.log(highestPair(["7", "6", "10", "7", "5"])) // [true, "7"]