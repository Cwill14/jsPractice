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

/*
Road Navigation
Road systems can be imagined as a graph of intersections connected by lines. The advantage of this is it makes it easier to find the shortest path between any two intersections.

Task
Write a function that takes as arguments:

A graph of the road system
The starting intersection (node)
The ending intersection (node)
And returns an object containing information about the shortest path.

Format of the road graph
The road graph follows the JSON graph specification linked in the Resources tab. As an example, this is what one road graph could look like (in JSON):

{
  "graph": {
    "directed": false,
    "nodes": [
      { "id": 0 },
      { "id": 1 },
      { "id": 2 },
       { "id": 3 }
    ],
    "edges": [
      {
        "source": 0,
        "target": 1,
        "metadata": {
          "distance": 5
        }
      },
      {
        "source": 1,
        "target": 3,
        "metadata": {
          "distance": 9
        }
      },
      {
        "source": 3,
        "target": 2,
        "metadata": {
          "distance": 6
        }
      },
      {
        "source": 2,
        "target": 4,
        "metadata": {
          "distance": 3
        }
      },
      {
        "source": 4,
        "target": 3,
        "metadata": {
          "distance": 8
        },
      },
      {
       "source": 4,
       "target": 0,
       "metadata": {
         "distance": 2
       }
     }
    ]
  }
}
Additionally, all edges are two way roads (undirected), so you don't need to worry about that. Which node is in source and which is in target does not matter. Edges may contain the property label, which is just a street name and not necessary for you to use.

And remember, the goal is to minimize the sum of all the metadata.distance properties of edges used.

Format of return value
The return value should be an object with properties distance and path.

distance should be the number that is the total sum of the distance metadata on each edge used.

path should be an array of numbers, where each number is the id of a node used along the path from the start to the end.

For example, if the shortest path from node 1 to node id 2 was going from node 1 to node 3 to node 2, then the result should be [1, 3, 2]. You must include the starting and ending nodes in the path.

If two paths have the same distance, it does not matter which one you return (which won't happen in the tests).

Example
In the example road graph, if I asked you to find the path from node id 2 to node id 0, the function call would be

navigate(roads, 2, 0) // Where roads is the example graph structure
And you should return

{
  "distance": 5,
  "path": [ 2, 4, 0 ]
}
Notes
If two paths have the same distance, it doesn't matter which one you return (which won't happen in the tests).
Make sure to include the starting and ending nodes in the path.
The order of the path array does matter.
Distance between 2 nodes is located in the metadata.distance property of the edge connecting them.
*/

function diceGame(scores) {

}

/*
PvP Battle: Alice vs Bob
Having gotten rather sick of always being paired together in sciency literature, Alice and Bob have decided to finally settle their differences with a magical duel. They'll each learn some skills and then battle it out.

Your Goal
Your job is to write the class Player which will handle all the combat mechanics.

Properties
Let's look at the Player class's properties first. You'll need:

A private health variable hp. Make sure it's private!
A private maxHealth variable maxHp. Again, make sure it's private.
A private energy variable en. Again, make sure it's private.
A private maxEnergy variable maxEn. You know the drill by now.
Getters and setters for health and energy:
These should be named hp and en, respectively.
They should be "capped". That is, you cannot have less than 0 health or energy, and your health and/or energy cannot be greater than their respective "max" values.
An armor value. This is public.
A name. This is also public.
A getter for health percent, called hpPerc. Please return this value rounded to two decimal places.
Now that that's out of the way, let's look at our single method (other than the aforementioned getters and setters):

learnSkill() Method
Your class must implement a single method called learnSkill.

Basics/Functionality
This method takes two parameters: a skill name (e.g., "fireball"), and an object containing skill statistics (more on that below!).

Most importantly, after adding a skill:

alice.learnSkill("fireball",{ //stats (see below)})
you should then be able to call that skill as you'd normally call a method on your Player instance, with the target passed as a parameter:

alice.fireball(bob);
where the name of the method is merely the skill name passed in. Keep in mind that some skills may have two-part names, so you'll need to factor that in when creating your method.

In general, using the skill should return a string describing what happened, as well as changing the relevant numbers on both the target and "caster".

stats Object
Your stats object has the following properties:

{
    damage: the raw damage done (assuming 0 effective armor),
    description: the description of the attack (for humans to read),
    penetration: Armor penetration amount (see "Armor" below),
    cost: Cost, in energy points,
    heal: Optional heal value (some skills heal the caster on cast!)
}
Logic
Armor: Your learnSkill method will start out by subtracting an armor penetration stat from the target's armor value to get an "effective armor" value. That is, if Alice attacks Bob with a skill with 5 armor penetration, and Bob's armor is 50, then Bob's effective armor for this attack is 50-5 = 45.

Energy: If the skill costs more energy than the character currently has, return (player name) attempted to use (skill name), but didn't have enough energy!. Otherwise, subtract the energy cost from the character's energy, and continue.

Damage: Damage here is pretty easy. Consider that the minimum armor value is 0, the maximum is 100, and each percent effective armor decreases damage by one percent. An example:

Alice attacks Bob for 50 damage. Bob's effective armor rating is 25.
Alice does 50*((100-25)/100) = 37.5 damage.
Attack String: You'll need to return a string describing what happened. The first part of the returned string should describe the attack itself, and should look like this: (attacking player name) used skill (skill name), (skill description), against (target name), doing (calculated damage) damage!. For the damage calculation, please round your value to two decimal places.

Next, if the skill healed, append (attacking player name) healed for (heal amount) health..

Finally, if the target player died, append (target name) died.. Otherwise, append (target name is at (targ hpPerc) % health.

Return this string, and don't forget to actually apply the damage/health changes!

Example
const alice = new Player("Alice", 110, 50, 10)
const bob = new Player("Bob", 100, 60, 20)

alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
})

console.log(alice.fireball(bob))
// Alice used fireball, a firey magical attack, against Bob, doing
// 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

bob.learnSkill("superbeam", {
  damage:200,
  penetration:50,
  heal:50,
  cost:75,
  desc: "an overpowered attack, pls nerf"
})

console.log(bob.superbeam(alice))
// Bob attempted to use superbeam, but didn't have enough energy!
Notes
In many fighting games, skills "pick" from a range of possible damage values. For the sake of simplicity (and testing!), assume that each skill does a specific, set damage number (factoring everything else in, of course).
Don't worry about preventing a "dead" player from attacking.
Pay very close attention to the exact format of the returned "attack" string! I'm comparing that directly with an expected result string, so even something like a missing space could ruin your answer.
Your Player instances will be constructed as new Player(name,health,energy,armor)
*/
class Player {
	#health;
	#maxHealth;
	#energy;
	#maxEnergy;
	
	constructor(name = "Player", hp = 100, maxHp = 100, nrg = 100, maxNrg = 100, armor = 0) {
		this.name = name;
		this.#health = hp;
		this.#maxHealth = maxHp;
		this.#energy = nrg;
		this.#maxEnergy = maxNrg;
		this.armor = armor;
	}
	#changeHealth(value) {
		if (value >= 0 && value <= this.#maxHealth) {
			this.#health = value;
		} else {
			return "Invalid health change value"
		}
	}
	#changeEnergy(value) {
		if (value >= 0 && value <= this.#maxEnergy) {
			this.#energy = value;
		} else {
			return "Invalid energy change value"
		}
	}
	
	exDmg(dmg) {
		if (dmg < 0) {
			return `Error: ${dmg} is negative value. Damage needs to be a positive value`
		}
		let result = this.#health - dmg;
		if (result <= 0) {
			return `${this.name} was hit for ${dmg} damage, and has died`
		} else {
			this.#changeHealth(result)
			return `${this.name} was hit for ${dmg} damage, and now has ${this.#health} health`
		}
	}
	get health() {
		return this.#health
	}
	get maxEnergy() {
		return this.#maxEnergy
	}
}

let testy = new Player("Testy McTestFace", 70, 100, 50, 100, 5)
// testy.changeHealth(2)
// testy.health = 6;
console.log(testy.health)
console.log(testy.exDmg(4))
// console.log(testy.maxEnergy)
// console.log(testy.maxHealth)
// console.log(testy.energy)