// Find the output with reason(scope)

// var x = Math.floor(Math.random())
// // here x = 0
// if(x>0.5){
//     var x =1
// }else{
//     var x =2
// }
// console.log(x); 
// output is 2  here the x is overwriten as both are declared in the gobal scope


// ==============================================
// process.nextTick

// console.log('start');
// process.nextTick(()=>{
//     console.log('middle');
    
// })
// console.log('End');
// ===============================================

// console.log(true + true);

// for(var i =0 ; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000)
// }
// =============================================
// check whether if a number is power of 2

// function pow2(num){
//     if(num <1){
//         return false
//     }
//     if(num %2 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// const result = pow2(13)
// console.log(result);
// ===========================================================

// const str = 'contact_details'

// function strUpperCase(str){
//     let newStr=''
//     let convert= false
//     for (let i = 0; i < str.length; i++) {
//         if(i ===0 ){
//             newStr += str[i].toUpperCase()
//         }
//        if(str[i] === '_' ){
        
//         newStr += " "
//         convert= true
//        }else if(convert){
//         newStr += str[i].toUpperCase()
//        }
//        else if(i !==0){
//         newStr +=str[i]
//        }
        
//     }
//     return newStr
// }
// const result = strUpperCase(str)
// console.log(result);
// ============================================================
// fibonacci series
// ------------------------------------------------------------
// function fib(n){
//     let fib =[0,1]
//     let sum =0

//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2]
//         sum += fib[i]
        
//     }
//     console.log(sum);
    
// }

// fib(10)
// ================================================================

// binary search

// function binarySearchRecursive(arr, target, left, right) {
//     // Base condition: if the left index exceeds the right index, the target is not found
//     if (left > right) {
//         return -1;
//     }

//     // Calculate the middle index
//     let mid = Math.floor((left + right) / 2);

//     // Check if the middle element is the target
//     if (arr[mid] === target) {
//         return mid;
//     }

//     // If the target is smaller than the middle element, search in the left half
//     if (arr[mid] > target) {
//         return binarySearchRecursive(arr, target, left, mid - 1);
//     }

//     // If the target is greater than the middle element, search in the right half
//     return binarySearchRecursive(arr, target, mid + 1, right);
// }

// // Example usage:
// let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let targetValue = 7;
// let result = binarySearchRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);

// if (result !== -1) {
//     console.log(`Element found at index ${result}`);
// } else {
//     console.log("Element not found");
// }
// ==============================================================================
// ==============================================================================
// function binarySearchStringRecursive(arr, target, left, right) {
//     // Base condition: if the left index exceeds the right index, the target is not found
//     if (left > right) {
//         return -1;
//     }

//     // Calculate the middle index
//     let mid = Math.floor((left + right) / 2);

//     // Compare the middle element with the target string
//     if (arr[mid] === target) {
//         return mid;
//     }

//     // If the target string is lexicographically smaller, search in the left half
//     if (arr[mid] > target) {
//         return binarySearchStringRecursive(arr, target, left, mid - 1);
//     }

//     // If the target string is lexicographically greater, search in the right half
//     return binarySearchStringRecursive(arr, target, mid + 1, right);
// }

// // Example usage:
// let sortedArray = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];
// let targetValue = "cherry";
// let result = binarySearchStringRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);

// if (result !== -1) {
//     console.log(`Element found at index ${result}`);
// } else {
//     console.log("Element not found");
// }


// =========================================================
// var removeElement = function(nums, val) {
//     let k =0
//     for(let i=0 ; i<nums.length; i++){
//         if(nums[i] !== val ){
//             nums[k]= nums[i]
//             k++
//         }
//     }
//     return k
// };

// const result = removeElement([3,2,2,3],3)
// console.log(result);
// ======================================================
// var removeDuplicates = function(nums) {
//     let i =1
//     for(let j =1;j< nums.length;j++){
//         if(nums[j] !== nums[i-1]){
//             nums[i]= nums[j]
//             i++
//         }

//     }
//     return i
// };
// const result = removeDuplicates([1,1,2])
// console.log(result);
// ===================================================
// var majorityElement = function(nums) {
//     let candidate = null
//     let count =0
//     for(let i =0 ; i<nums.length ;i++){
//         if(count === 0){
//             candidate = nums[i]
           
            
//         }
//         count += (nums[i] === candidate) ?1:-1
//     }
//     return candidate
// };
// const result = majorityElement([3,2,3])
// console.log(result);
// ====================================================

// var rotate = function(nums, k) {
//     let count =0
//     let newNum =[]
//     for(let i= nums.length-1; i>=0;i--){
//         newNum.push(nums[i])
//         count++
//         if(count === k){
//             break;
//         }
    
//     }
//     newNum.reverse()
//     for(let j =0; j<(nums.length) -k;j++ ){
//         newNum.push(nums[j])
//     }
//     return newNum
// };
// const result = rotate([1,2,3,4,5,6,7], 3)
// console.log(result);

// ====================================================

// var mySqrt = function(x) {
//     for(let i=1;i<x;i++ ){
        
//         if(Math.floor(i* i) == x ) return i
//     }
// };
//  let result = mySqrt(8)
// console.log(result);

//======================================================================================
