//  Javascript Practice 

//  Feb 2, 20222

// 1
/*
    A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

    The wanted word is in lowercase.
    The crowd of letters is all in uppercase.
    Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
    Examples
    detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

    detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

    detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

*/

function detectWord(str) {
	return str.match(/[a-z]/g).join("")
}

detectWord(UcUNFYGaFYFYGtNUH)

// 2

// Create a function which returns the number of true values there are in an array.

const countTrue = arr => {
    let count = 0
    arr.forEach(value => value == true && count++)
    return count
}

countTrue([true, false, false, true, false]) // 2

const countTrue2 = arr => {
    return arr.filter(x => x).length
}

countTrue2([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]) // 8