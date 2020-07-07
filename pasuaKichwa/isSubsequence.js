// iterative
function isSubsequence(str1, str2) {
    var idx1 = 0;
    var idx2 = 0;
    if (!str1) return true;

    while (idx2 < str2.length) {
        debugger
        if (str2[idx2] === str1[idx1]){
            debugger
            idx1++;
        } 
        if (idx1 === str1.length) {
            debugger
            return true;
        }
        idx2++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('a', 'acb'));
console.log(isSubsequence('ab', 'acb'));
console.log(isSubsequence('singe', 'stringtt'));