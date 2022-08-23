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
        const arr1 = str1.split("")
        const arr2 = str2.split("")
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