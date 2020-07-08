function averagePair(arr, targetAvg) {
    // add whatever parameters you deem necessary - good luck!
    // LET let currentAvrg = integer;
    let currentAvrg = 0;
    let largeNoIdx = arr.length - 1;
    // no such thing as arr.length()
    //its arr.length
    let smallNoIdx = 0;

    while (largeNoIdx > smallNoIdx) {
        debugger
        let largeNo = arr[largeNoIdx];
        let smallNo = arr[smallNoIdx]
        currentAvrg = (largeNo + smallNo) / 2
        console.log(currentAvrg)
        if (currentAvrg === targetAvg) {
            return true;
        } else if (currentAvrg < targetAvg) {
            smallNoIdx += 1;
        } else {
            // largeNoIdx += 1;
            // this line made my loop infinity
            largeNoIdx -= 1;
        }
    }

    return false
}

console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
