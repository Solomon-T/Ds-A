function binarySearch(arr, target) {
    if (arr.length === 0) return -1;

    let smallNumIdx = 0;
    let largeNumIdx = arr.length - 1;
    let midNumIdx = Math.floor(arr.length / 2);
    let currentNum = arr[midNumIdx];

    while (largeNumIdx >= smallNumIdx) {

        if (target > currentNum) {
            largeNumIdx = midNumIdx - 1;
        } else if (target < currentNum) {
            smallNumIdx = midNumIdx + 1;
        } else {
            return midNumIdx;
        }
        midNumIdx = (largeNumIdx + smallNumIdx) / 2;
        currentNum = arr[midNumIdx];
    }

    return -1;
}