// NxN Sudoku checker
function sudoku(data) {
    // calculate box size
    var side = Math.sqrt(data.length);
    // return false if not a valid size (root not whole)
    if (side % 1) {
        return false;
    } else {
        // go through each row
        for (var i = 0; i < data.length; i++) {
            // making new arrays for the perpendicular rows and for the boxes
            var perp = [],
                box = [];
            // filling in the arrays
            for (var j = 0; j < data.length; j++) {
                perp.push(data[j][i]);
                box.push(data[j % side + Math.floor(i / side) * side][Math.floor(j / side) + i % side * side]);
            }
            // checking that all lines are the same length and that there are no duplicates in each lines/boxes
            if (data[i].length != data[0].length || !check(data[i]) || !check(perp) || !check(box)) {
                return false;
            }
        }
        return true;
    }
    // checks that the values from 1 to N+1 are present without duplicates
    function check(row) {
        var found = [];
        // add found indexes to the found array
        for (var i = 0; i < row.length; i++) {
            // false if duplicate is found
            if (found[row[i]]) {
                return false;
            } else {
                found[row[i]] = true;
            }
        }
        // check that all the values are there
        for (var i = 1; i < row.length + 1; i++) {
            if (!found[i]) {
                return false;
            }
        }
        return true;
    };
};

// will be incorrect, 3x3 is not a valid size
console.log(sudoku([
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
]));

// will be correct
console.log(sudoku([
    [1, 2, 3, 4],
    [4, 3, 2, 1],
    [3, 4, 1, 2],
    [2, 1, 4, 3]
]));

// will be correct
console.log(sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],
    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],
    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
]));

// will be false, columns correct, but not boxes
console.log(sudoku([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
]));
