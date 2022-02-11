//  Javascript Practice 

//  Feb 8, 2022

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


// Feb 10, 2022

/* 
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".  

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter

*/

function generation(x, y) {
	let answer = "me"
	if (x == 0) {
		return answer
	}
	if (x !== 0 && y == "m") {
		switch(x) {
  		    case -3:
    		    answer = "great grandfather"
    		    break;
  		    case -2:
                answer = "grandfather"
    		    break;
            case -1:
                answer = "father"
                break;
            case 1:
                answer = "son"
                break;
            case 2:
                answer = "grandson"
                break;
            case 3:
                answer = "great grandson"
                break;
  		    default:
    		    answer = "me"
		}
	}
	else if (x !== 0 && y == "f") {
        switch(x) {
            case -3:
              answer = "great grandmother"
              break;
            case -2:
              answer = "grandmother"
              break;
          case -1:
              answer = "mother"
              break;
          case 1:
              answer = "daughter"
              break;
          case 2:
              answer = "granddaughter"
              break;
          case 3:
              answer = "great granddaughter"
              break;
            default:
              answer = "me"
      }
	}
    return answer
}

generation(-3, "m") // "great grandfather"
generation(1, "f") // "mother"

const generation2 = (x, y) => {
    const dict = {
        3: "great grand",
        2: "grand",
        1: ""
    }
    if (x == 0) {return "me"}
    if (y == "m") {
        return `${dict[Math.abs(x)]}${x > 0 ? "father" : "son"}`
    } else if (y == "f") {
        return `${dict[Math.abs(x)]}${x > 0 ? "mother" : "daughter"}`
    } 
}


generation2(0, "m") // "me!"
generation2(-2, "f") // granddaughter