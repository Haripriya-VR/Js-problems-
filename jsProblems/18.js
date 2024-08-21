
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

function intersectionOfArray(){

}

// ===============================
// missing number of an array

let arr=[1,2,3,5,6]
let counts =10
function missingNumber(arr,count){
    let missingNum=[]
    for (let i = 1; i <= count; i++) {
        let found=false
      
     for (let j = 0; j < arr.length; j++) {
        if(i === arr[j]) {
            found = true
            break;
        }
     }
     if(!found){
        missingNum.push(i)
     }
         
    }
    arr.push(...missingNum)
    return arr
    
}

 const result = missingNumber(arr,counts)
 console.log(result);
 

// ========================================


