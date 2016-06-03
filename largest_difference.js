// finds the largest distance between values where first <= second in an array
function largest_difference(data) {
    var largest = 0;
    // nested loops to check each value with the ones in front of it
    for (var i = 0; i < data.length; i++) {
        // adding the largest val to skip ahead unnecessary checks
        for (var j = i + largest; j < data.length; j++) {
            // new best if i <= j
            if (data[i] <= data[j]) {
                largest = j - i;
            }
        }
    }
    return largest;
};

// will be 4 ~ between numbers 4 and 5
console.log(largest_difference([ 4, 3, 3, 1, 5, 2 ]));

// will be 10 ~ between numbers 17 and 20
console.log(largest_difference([ 78, 88, 64, 94, 17, 91, 57, 69, 38, 62, 13, 17, 35, 15, 20 ]));

// will be 2 ~ between 1 and 3
console.log(largest_difference([ 9, 4, 1, 2, 3, 0, -1, -2 ]));

// wiil be 4 ~ between 4 and 4
console.log(largest_difference([ 9, 4, 1, 10, 3, 4, 0, -1, -2 ]));
