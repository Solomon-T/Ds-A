function maxSubarraySum(arr, count) {
    if (count > arr.length) return null;

    let maxSum = arr[0];
    let currentSum = 0;
    let removeIdx = 0;

    arr.forEach((ele, idx) => {
        currentSum += ele;
        if (idx >= count) {
            currentSum = currentSum - arr[idx - count];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
          console.log(currentSum);
    });

    return maxSum;

}

console.log(maxSubarraySum([100,200,300,400], 2));
