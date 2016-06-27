// Snail Sort : Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// test cases, output should be an ordered array of increasing values
// var array = [[]];
// var array = [[1,2,3], [8,9,4], [7,6,5]];
// var array = [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]];
var array = [[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]];

console.log(snail(array));

function snail(array) {

	// min and max will track what values were already visited
	// direction will be true for upwards and false for downwards
	var max = array.length,
		min = 1,
		direction = false,
		current = min,
		result = [];

	// loop until the center value is reached ((n^2 - n + 2)/2) loops
	// variable "current" represents which sub-array is being read, for example in a square of side 5, this would look like : 1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 3 over the duration of the loop
	while(min <= max) {

		/* high peak :	reduce maximum
						set direction to downwards
						append the current array in reverse order to result
						decrement "current" */
		if (current == max && direction) {
			max--;
			direction = false;
			result.push.apply(result, array[current-1].reverse());
			current--;

		/* low peak :	increment minimum
						set direction to upwards
						append the current array to result
						increment "current" */
		} else if (current == min && !direction) {
			min++;
			direction = true;
			result.push.apply(result, array[current-1]);
			current++;

		/* ascending :	append the last element of current array to result
						remove the last element of current array
						increment "current" */
		} else if (direction) {
			result.push(array[current-1].pop());
			current++;

		/* descending :	append the first element of current array to result
						remove the first element of current array
						increment "current" */
		} else {
			result.push(array[current-1][0]);
			array[current-1] = array[current-1].slice(1);
			current--;
		}
	}
	return result;
}
