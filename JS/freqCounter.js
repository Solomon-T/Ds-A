function sameFrequency(num1, num2) {
    let numCopy1 = num1;
    let numCopy2 = num2;
    let freqCounter1 = {};
    let freqCounter2 = {};
    let sameFreqCount = 0;

    while (numCopy1 > 0) {
        const lastDigit1 = numCopy1 % 10;
        freqCounter1[lastDigit1] = (freqCounter1[lastDigit1] || 0) + 1;
        numCopy1 = Math.floor(numCopy1 / 10);
    }

    while (numCopy2 > 0) {
        const lastDigit2 = numCopy2 % 10;
        freqCounter2[lastDigit2] = (freqCounter2[lastDigit2] || 0) + 1;
        numCopy2 = Math.floor(numCopy2 / 10);
    }

    console.log(freqCounter1);
    console.log(freqCounter2);

    Object.keys(freqCounter1).forEach(ele => {
        if (freqCounter1[ele] === freqCounter2[ele]) {
            sameFreqCount += 1;
        }
    })
    if (sameFreqCount >= 2) return true;
    console.log(sameFreqCount);
    return false;
}

console.log(sameFrequency(182,281));