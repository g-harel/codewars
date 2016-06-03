// finds the first sum of two numbers in the array that add up to s
function sum_pairs(ints, s) {
    // variable to store found values
    var found = {};
    // going through all elements
    for (var i = 0; i < ints.length; i++) {
        // check if the value needed to be added to give s was found previously
        if (found[s - ints[i]]) {
            return [s - ints[i], ints[i]];
        } else {
            // mark the found value as found
            found[ints[i]] = true;
        }
    }
}


// will be [ 1, 7 ]
console.log(sum_pairs([ 1, 4, 8, 7, 3, 15 ], 8));

// will be [ 0, -6 ]
console.log(sum_pairs([ 1, -2, 3, 0, -6, 1 ], -6));

// will be [ 3, 7 ]
console.log(sum_pairs([ 10, 5, 2, 3, 7, 5 ], 10));

// will be [36, 20]
console.log(sum_pairs([31, 13, -27, 9, -28, -32, -39, 16, -31, -2, 7, -15, 27, -26, -18, 36, -39, 10, -20, -8, -25, 38, 36, 6, 17, 2, 32, -37, 34, -35, 15, -7, 36, 23, -6, 21, 7, 10, 0, 15, -13, 27, -35, 14, 18, -5, -24, 19, -22, 39, -26, 32, -14, 9, -22, 10, -26, -26, -16, -20, -15, 31, 8, -10, 23, -26, -34, 20, -16, 21], 46));
