// Coding Exercise 21: capitalizeWords

function cap(str) {
    let firstChar = str[0];
    return firstChar.toUpperCase() + str.slice(1);
}

function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 1) return [cap(arr[0])];

    let firstStr = arr.shift();
    let capfirst = [cap(firstStr)];
    return capfirst.concat(capitalizeFirst(arr));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
