// const obj={
//     key1:[1,2,3],
//     key2:5,
//     key3:[4,5],
//     key4:'not an array'
//     }
//     function sumOfArray(obj){
//         let sum=0;
//         for(let key in obj){
//             if(Array.isArray(obj[key])){
//              sum+=obj[key].reduce((acc,digit)=>digit+acc,0)
//             }
//         }
//         return sum
//     }
//  console.log(sumOfArray(obj))

// =======================================================================================
// 
// function duplicate(arr){
//     let map=new Map();
//     let duplicates=[];
//     for(let i=0;i<arr.length;i++){
//         let count=map.get(arr[i])||0;
//         map.set(arr[i],count+1)
//     }
//     map.forEach((val,key)=>{
//         if(val>1){
//             duplicates.push(key)
//         }
//     })
//     return duplicates
// }
// const array = [1, 2, 3, 2, 4, 3, 5, 6, 4];
// const duplicates = duplicate(array);
// console.log("Duplicate elements:", duplicates); // Output: [2, 3, 4]

// ====================================================================

// const express=require('express');
// const app=express();
// app.get('/:value1/:value2',(req,res)=>{
//     const {value1,value2}=req.params;
//     let sum=parseInt(value1)+parseInt(value2)
//     console.log(sum);
//     res.status(200).send(JSON.stringify(sum))
//     res.status(200).send([sum])
// })
// app.listen(3000,()=>{
//     console.log('Hai');
// })

// ===================================================================
// const express=require('express')
// const app=express();
// const fs=require('fs')
// app.get('/',(req,res)=>{
//     fs.readFile('./array.txt','utf-8',(err,data)=>{
//         if(err){
//             res.status(500).send('Internal')
//         }else{
//             const arr=data.split(' ').map(Number);
//             const square=arr.map((digit)=>Math.pow(digit,2))
//             res.send(square)

//         }
//     })
// })
// app.listen(3000)
// ==============================================================================

// const express=require('express')
// const app=express();
// const fs=require('fs')
// app.get('/',(req,res)=>{
//     fs.readFile('./array.txt','utf-8',(err,data)=>{
//         if(err){
//             res.status(500).send('Insternal Error')
//         }else{
//             const arr=data.split(' ').map(Number).reduce((acc,digit)=>acc+digit,0)
//             res.send(arr.toString())
//         }
//     })
// })
// app.listen(3001)
// ==========================================================
// util.promisify

// const express=require('express')
// const app=express();
// const util = require('util')
// const fs=require('fs')

// const readFile = util.promisify(fs.readFile)
// readFile('./array.txt','utf-8').then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
    
// })

// app.listen(3000)
// ========================================================
// util.types

// console.log(util.types.isDate(new Date()));
// =========================================================
// router chaining

// app.route('/users')
//   .get((req, res) => {
//     res.send('Get list of users');
//   })
//   .post((req, res) => {
//     res.send('Create a new user');
//   });
//   app.listen(3003, () => {
//     console.log(`Server is running on http://localhost:3003`);
//   });

// =====================================================================================

// const express=require('express')
// const app=express();
// const sumMiddleware=((req,res,next)=>{
//     const {value1,value2}=req.query;
//     const sum=parseInt(value1)+parseInt(value2);
//     req.sum=sum;
//     next();
// })
// app.get('/sum',sumMiddleware,(req,res)=>{
//     const sum=req.sum
//     res.send("The sum of the two values is",${sum});
// })
// app.listen(3000,()=>{
//     console.log('Server ...');
// })
//========================================================================================
// const eventdj=require('events');
// const myemitter=new eventdj();
// myemitter.on('hai',()=>{
//     console.log('hello');
// })
// myemitter.emit('hai')
// =======================================================================================
// const person={
//     name:'Abhinav',
//     greet(greet){
//         console.log(${greet},${this.name})
//     }
// }
// const person1={
//     name:'Hari'
// }
// person.greet.call(person1,'hai')
// person.greet.apply(person1,['hello'])
// const person3=person.greet.bind(person1)
// person3('Bye')
// =======================================================================================
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomnumber=Math.random();
//         if(randomnumber>.5){
//             resolve(randomnumber)
//         }else{
//             reject('Random number is less than .5')
//         }
//     },1000)
// })
// pr.then((value)=>{
//     console.log(value);
// }).catch((data)=>{
//     console.log(data);
// })
// ===========================================================
// const http=require('http')
// http.createServer((req,res)=>{
//     let path=req.url;
//     if(path==='/'){
//         res.write('Hai')
//         res.end()
//     }else{
//         res.write('404 not found');
//         res.end();
//     }
// }).listen(3000)

// ===============================================================
// function del(obj){
//     let max=0;
//     let maxkey;
//     for(let key in obj){
//         if(obj[key]>max){
//             maxkey=key;
//             max=obj[key];
//         }
//     }
//     delete obj[maxkey]
// }
// console.log(obj);
// del(obj);
// console.log(obj);
// ===========================================================
// let arr=[1,2,-5,6,-6,8]
//  let sum=arr.reduce((acc,digit)=>{
//     if(digit>0){
//        return acc+digit
//     }else{
//         return acc
//     }
// },0)
// console.log(sum);
//==========================================================
// let words=['eat','tea','tan','ate','nat','bat']
// function groupAnagrams(words){
//    const anagrams={}
//    words.forEach(word => {
//     let sortedWord=word.split('').sort().join('')
//     if(anagrams[sortedWord]){
//         anagrams[sortedWord].push(word)
//     }else{
//         anagrams[sortedWord]=[word]
//     }
//    });
//    let grouped=Object.values(anagrams)
//    return grouped
// }
// let result=groupAnagrams(words)
// console.log(result)
// /=======================================================
// const obj={
//     name:'Abhinav',
//     age:24,
//     fullname:function(){
//         return this.name+' '+this.age
//     }
// }
// const obj2={
//     name:'Aswin',
//     age:23
// }
// console.log(obj.fullname.call(obj2));
// console.log(obj.fullname.apply(obj2))
// const fullname=obj.fullname.bind(obj2)
// console.log(fullname());
// ======================================================
// const numbers=[1,2,3,4,-1,-2,6,-8]
// const sum=numbers.reduce((acc,number)=>{
//     if(number>0){
//         return acc+number
//     }else{
//         return acc
//     }
// },0)
// console.log(sum);
// ==================================================
// obj1={'a':3,'b':5,'c':7}
// obj2={'b':3,'f':5,'c':7}
// let result=[]
// for(const key in obj1){
//     if(obj2.hasOwnProperty(key)){
//         result.push(key)
//     }
// }
// console.log(result)
// =====================================================
// function genarateOtp(){
//     const otp=Math.floor(10000+Math.random()*90000)
//     return otp.toString()
// }
// console.log(genarateOtp())
// =======================================================
// function sortedornot(arr){
//     let array=[...arr].sort()
    
//     return JSON.stringify(array)==JSON.stringify(arr)
// }
// let arr=[1,2,3,6]
// console.log(sortedornot(arr));
// ====================================================================
// let Str='hai all im happy'
// let result=Str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
// console.log(result);
// ========================================================================

// function BinarySearch(arr,target){
//     let low=0
//     let high=arr.length-1
//     let result=[]
//     while(low<=high){
//         let  mid=Math.floor((low+high)/2)
//         if(arr[mid]==target){
//             let left=mid
//             while(left>=low && arr[left]==target){
//                 left--
//             }
//             let right=mid
//             while(right<=high && arr[right]==target){
//                 right++
//             }
//             for(let i=left+1;i<right;i++){
//                 result.push(i)
//             }
//             return result
//         }else if(target<arr[mid]){
//             high=mid-1
//         }else{
//             low=mid+1
//         }
//     }
//     return result.length>0 ? result :[-1]
// }
// let arr=[1,2,3,5,6,6,6,7,8,8]
// console.log(BinarySearch(arr,6));
// ==================================================================
// function nonrepeat(arr){
//     const cmap=new Map()
//     arr.forEach((element)=>{
//         cmap.set(element,(cmap.get(element)||0)+1)
//     })
//     console.log(arr);
//     let res=arr.filter((element)=>
//         cmap.get(element)==1
//     )
//     return res 
// }
// let arr=[1,2,4,5,2,3,5,6,3,4,7,8]
// console.log(nonrepeat(arr));
// ========================================================================
// function countoccursnces(arr){
//     return arr.reduce((acc,element)=>{
//       acc[element]=(acc[element]||0)+1
//       return acc
//     },{})
//   }
//   let arr=[1,2,4,5,2,3,5,6,3,4,7,8]
//   console.log(countoccursnces(arr));
// ==========================================================================
// function findMinAbsDiffPairs(arr) {
//     // Step 1: Sort the array
//     arr.sort((a, b) => a - b);

//     // Step 2: Find the minimum absolute difference
//     let minDiff = Infinity;
//     for (let i = 1; i < arr.length; i++) {
//         minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
//     }

//     // Step 3: Find all pairs with the minimum absolute difference
//     const result = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] - arr[i - 1] === minDiff) {
//             result.push([arr[i - 1], arr[i]]);
//         }
//     }

//     // Print all pairs in ascending order
//     result.forEach(pair => console.log(pair[0], pair[1]));
// }

// // Example usage:
// const arr = [3, 8, 1, 17, 6];
// findMinAbsDiffPairs(arr);
// ====================================================================
// function findKthMissingPositive(arr, k) {
//     // Step 1: Create a set from the array
//     const set = new Set(arr);

//     // Step 2: Iterate through positive integers and find the k-th missing one
//     let count = 0;
//     let current = 1;
    
//     while (true) {
//         if (!set.has(current)) {
//             count++;
//             if (count === k) {
//                 return current;
//             }
//         }
//         current++;
//     }
// }
// // Example usage:
// const arr = [3, 7, 1, 2, 8, 4, 5];
// const k = 2;
// console.log(findKthMissingPositive(arr, k)); // Output: 6
// ===============================================================================================

// callback hell to promise
//

// const arr = [1, 2, 3, 4];
// const arr1 = [4, 5, 7, 8];

// function Unque(arr, arr1) {
//     var newArr = [];

//     // Combine both arrays
//     const combinedArr = arr.concat(arr1);

//     // Create a map to count occurrences
//     const countMap = combinedArr.reduce((map, item) => {
//         map[item] = (map[item] || 0) + 1;
//         return map;
//     }, {});

//     // Filter elements that occur only once
//     newArr = combinedArr.filter(item => countMap[item] === 1);

//     return newArr;
// }

// let result = Unque(arr, arr1);
// console.log(result); // Output: [ 1, 2, 3, 5, 7, 8 ]



// reverse string using stack
// remove duplicates using hashtable


// const arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8];
// const arr1 = [4, 5, 7, 8, 9, 10, 10, 11];

// function removeDuplicatesUsingHashtable(arr) {
//     // Create an empty object to act as a hashtable
//     let hashtable = {};
//     let result = [];
    
//     // Iterate over the array and store unique values in the hashtable
//     for (let i = 0; i < arr.length; i++) {
//         if (!hashtable[arr[i]]) {
//             hashtable[arr[i]] = true;
//             result.push(arr[i]);
//         }
//     }
    
//     return result;
// }

// // Combine both arrays
// const combinedArr = arr.concat(arr1);
// // Remove duplicates using the hashtable method
// const result = removeDuplicatesUsingHashtable(combinedArr);

// console.log(result); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
// ===============================================================================

// Named parameters 

// function createUser({name,place,age}){
//     console.log(`Name:${name} , age :${age}, place: ${place}`);
    
// }
// createUser({name:'Hari', age:23 , place: 'kannur'})

// =============================================================================
// merge intervals


// function mergeIntervals(intervals){
//     intervals.sort((a,b)=> a[0]-b[0])

//     const merged = [intervals[0]]
//     console.log(merged);
    

//     for (let i = 1; i < intervals.length; i++) {
//         let cur = intervals[i]
//         console.log('cur',cur);
        
//         let lastMerged = merged[merged.length -1]
//         console.log('lastmerge',lastMerged[1]);
        
//         if(cur[0] <= lastMerged[1]){
//             lastMerged[1] = Math.max(lastMerged[1],cur[1])

//         }else{
//             merged.push(cur)
//         }
        
//     }
//     return merged
// }
// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// console.log(mergeIntervals(intervals))


// ============================================================
// function majorityElement(nums) {
//     let candidate = null;
//     let count = 0;
  
//     for (let i = 0; i < nums.length; i++) {
//       if (count === 0) {
//         candidate = nums[i];
//       }
//       count += (nums[i] === candidate) ? 1 : -1;
//     }
  
//     return candidate;
//   }
  
//   // Example usage
//   const array = [1,3,3,3, 1, 1, 2,3, 2];
//   console.log(majorityElement(array)); // 2

// ====================================================










