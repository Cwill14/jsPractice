//                                                      5/12/22

// Calculate Depth of Array
/*
Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

Examples
depth([1, 2, 3, 4]) ➞ 1

depth([1, [2, 3, 4]]) ➞ 2

depth([1, [2, [3, 4]]]) ➞ 3

depth([1, [2, [3, [4]]]]) ➞ 4
*/
function depth(arr) {
	// let str = arr.toString()
	// console.log("str = ", str)
	// console.log(arr.toLocaleString())
	// console.log(Array.isArray(arr))
	// console.log("depth ran")
	let count = 1
	const recur = array => {
		console.log("recur ran on", array)
		array.map(e => {
			if (Array.isArray(e)) {
				console.log(e, "still arr")
				count++
				recur(e)
			} else {
				console.log(e, "not arr")
				return count
			}
		})
	}
	recur(arr)
	// console.log("count =", count)
	return count

}

console.log(depth([1, 2, 3, 4]), "<-- should be === 1") // 1
console.log("------------------------------------")
console.log(depth([1, [2, 3, 4]]), "<-- should be === 2") // 2
console.log("------------------------------------")
console.log(depth([1, [2, [3, 4]]]), "<-- should be === 3") // 3
console.log("------------------------------------")
console.log(depth([1, [2, [3, [4]]]]), "<-- should be === 4") // 4