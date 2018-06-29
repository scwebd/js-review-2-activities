var sumAll = function (arr) {
    // Create an empty array to hold all of the numbers we'll later add together
    var list = [];
    // Grab the lowest number
    var lower = Math.min(arr[0], arr[1]);
    // Grab the highest number
    var upper = Math.max(arr[0], arr[1]);

    // Loop through and add each number to our list array (lower, upper, AND all in between)
    for (var i = lower; i <= upper; i++) {
        list.push(i);
    }

    // We can check our array here if we want!
    // return console.log(list);

    // Use reduce to add each number in the array to get a running total of ALL numbers in the array
    var total = list.reduce(function (a, b) {
        return a + b;
    }, 0);

    return total;
}

// This should log 10
console.log(sumAll([1, 4]));
// This should log 45
console.log(sumAll([10, 5]));