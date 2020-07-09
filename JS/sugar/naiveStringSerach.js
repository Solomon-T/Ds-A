function naiveStringSearch(long, short) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            const char1 = long[i + j];
            const char2 = short[j];
            if (char1 != char2) {
                break;
            } else if (j === short.length - 1) {
                count += 1;
            }
        }
    }
    return count;
}