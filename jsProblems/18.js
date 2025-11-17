
// function reverseStr(str){
//     let reversed =''
//     for (let i = str.length -1; i >=0; i--) {
//         reversed += str[i]
//     }
//     return reversed
// }



// console.log(reverseStr('hello'));


// function reverseWords(sentence) {
//     let words = sentence.split(' ');
//     let reversedWords = [];

//     for (let i = words.length - 1; i >= 0; i--) {
//         reversedWords.push(words[i]);
//     }

//     return reversedWords.join(' ');
// }

// // Example usage
// console.log(reverseWords('hello world')); // Output: 'world hello'

// ==========================================================
// ==========================================================
// const nums = [2, 7, 11, 15];
// const target = 9;

// var twoSum = function(nums, target) {
//     const pairIdx = {};
// debugger
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (target - num in pairIdx) {
//             return [pairIdx[target - num], i];
//         }
//         pairIdx[num] = i;
//     }
// };

// const result = twoSum(nums, target);

// console.log(result);
// =========================================================
// intersection of two arrays

var lengthOfLastWord = function (s) {
    let length = 0;
    let counting = false;

    for (let c of s) {
        if (c !== ' ') {
            if (!counting) {
                counting = true;
                length = 1;
            } else {
                length++;
            }
        } else {
            counting = false;
        }
    }

    return length;
};



// ===============================
// var lengthOfLongestSubstring = function(s) {
//     let maxLength = 0;  // To store the length of the longest substring found
//     let sub = '';       // To build the current substring without repeating characters

//     for (let i = 0; i < s.length; i++) {
//         if (!sub.includes(s[i])) {  // If character is not in sub, add it
//             sub += s[i];
//             maxLength = Math.max(maxLength, sub.length);  // Update maxLength if sub length is greater
//         } else {
//             // If character is already in sub, start a new substring starting after the first occurrence of the duplicate character
//             sub = sub.slice(sub.indexOf(s[i]) + 1) + s[i];
//         }
//     }

//     return maxLength;
// };

// // Test the function
// const result = lengthOfLongestSubstring("abcabcbb");
// console.log(result);  // Expected output: 3



// ========================================
// ========================================

