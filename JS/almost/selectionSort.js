// -----------------------------------------------------------
// for some reason I thought the first solution doesn't work
// -----------------------------------------------------------

function selectionSort(arr) {
    let minValue = arr[0]

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (minValue > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                minValue = arr[j]
                break;
            }
        }
    }

    return arr;
}

// --------------------------------------------------------
// -----------------------------------------------------------

// bubbleSort([1,12,4,5,0]);