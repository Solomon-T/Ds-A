function bubbleSort(arr) {

    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let idx = 0; idx < arr.length - 1; idx++) {
            if (arr[idx] > arr[idx + 1]) {
                sorted = false;
                [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
            }
        }
    }

    return arr;
}

bubbleSort([1, 12, 4, 5, 0]);