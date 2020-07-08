function reverse(str) {
    // add whatever parameters you deem necessary - good luck!

    let strArr = str.split('');

    function reverseArr(arr) {
        if (arr.length < 2) return arr;
        let lastItemOnlyArr = [arr.pop()];
        return lastItemOnlyArr.concat(reverseArr(arr));
    }

    let reversedArr = reverseArr(strArr);

    return reversedArr.join('');
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


// do a second solution