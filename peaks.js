// returns the peak indexes and values
function peaks(data) {
    var pos = [],
        peaks = [],
        prev = 0,
        next = 0,
        offset = 0;
	// going through all elements (excluding the boder peaks)
    for (var i = 1; i < data.length - 1; i++) {
        offset = 0;
		// storing the previous value
        prev = data[i - 1];
		// finding the end of a pleateau of values
        while (data[i] == data[i + 1]) {
            i++;
            offset++;
        }
		// storing the next value
        next = data[i + 1];
		// the point is a peak (bigger than previous and next, store it)
        if (data[i] > prev && data[i] > next) {
            pos.push(i - offset);
            peaks.push(data[i]);
        }
    }
    return [pos, peaks];
}

// will be [ [ 3, 7 ], [ 6, 3 ] ]
console.log(peaks([ 3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3 ]));
//                           ^           ^

// will be [ [ 3, 7, 10 ], [ 6, 3, 2 ] ]
console.log(peaks([ 3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1 ]));
//                           ^           ^        ^

// will be [ [ 2 ], [ 3 ] ]
console.log(peaks([ 2, 1, 3, 2, 2, 2, 2, 5, 6 ]));
//                        ^

// will be [ [ 3, 7 ], [ 6, 3 ] ]
console.log(peaks([ 2, 2, 3, 6, 5, 1, 2, 3, 2, 1 ]));
//                           ^           ^
