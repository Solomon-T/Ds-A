// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!

    let arrChar = str.split('');

    function reverseArr(arr) {
        if (arr.length < 2) return arr;

        let lastChar = [arr.pop()];

        return lastChar.concat(reverseArr(arr));
    }

    let reverseChars = reverseArr(arrChar);
    let reversedStr = reverseChars.join('');

    return reversedStr === str;
}

// function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!

//   let arrChar = str.split('');

//   function reverseArr(arr){
//       if (arr.length < 2) return true;

//       let firstChar = arr.shift();
//       let lastChar = arr.pop();
//       if (firstChar === lastChar){
//           reverseArr();
//       }else{
//           return false;
//       }

//   }

//   return reversedStr === str;
// }
