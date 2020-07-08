// - its arr.length not arr.length()
// - string doesn't have a foreach

//------------------------    -----------    --------------------------------
//------------------------    Array.sort()   --------------------------------
numbers.sort()  // => [10, 12, 3, 44, 5]  // orders numbers by the first digit

var numbers = [44, 12, 5, 10, 3];
numbers.sort(function (a, b) {
    return a - b;
});

//------------------------    Array.sort()   --------------------------------
//------------------------    -----------    --------------------------------