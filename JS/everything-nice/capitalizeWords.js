// Coding Exercise 21: capitalizeWords

function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 1) return [arr[0].toUpperCase()];

    return capitalizeWords([arr.shift()]).concat(capitalizeWords(arr));
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']capitalizeWords(;))


// ------------------------------------------------------------
// take home
    // how to use str.toUpperCase()