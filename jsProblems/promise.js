// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomNum = Math.random()
//         if(randomNum <.5){
//             resolve(randomNum)
//         }else{
//            reject('random number less than .5')
//         }
//     },1000)
// })

// pr.then((value)=>{
//     console.log(value);
    
// }).catch((error)=>{
//     console.log(error);
    
// })
// =========================================================================
// promise.all 
// const p1= Promise.resolve(23)
// const p2 = 43
// const p3 =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('fooo')
//     },100)
// })

// Promise.all([p1,p2,p3]).then((values)=>{
//     console.log(values);
    
// })
// Outputs: [3, 42, 'foo']

// if any one rejects 
// ---------------------------------------------------
// ---------===========================---------------
// const p1= Promise.resolve(23)
// const p2 = 43
// const p3 =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('fooo')
//     },100)
// })

// Promise.all([p1,p2,p3]).then((values)=>{
//     console.log(values);
    
// }).catch((values)=>{
//     console.log(values);
    
// })
// // o/p :foo

// Promise.allSettled([p1,p2,p3]).then((values)=>{
//     console.log(values);
    
// })

// output 
// [
//     { status: 'fulfilled', value: 23 },
//     { status: 'fulfilled', value: 43 },
//     { status: 'rejected', reason: 'fooo' }
//   ]

// ==========================================================================
// promise.any 

// const p1 = Promise.reject('rejected')
// const p2 = Promise.reject('rejected p2')
// const p3 = Promise.resolve('resolved')

// Promise.any([p1,p2,p3]).then((values)=>{
//     console.log(values);
    
// })
// o.p:resolved gives out if any one is resolved and rejects if all rejects

// ==========================================================================
// const p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
// const p2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

// Promise.race([p1, p2]).then(value => {
//     console.log(value); // Outputs: two
// });

// =============================================================================
// promise chaining
// Question: Write a function that returns a promise which first adds 10 to a number, then multiplies the result by 2, and finally logs the result.
// function processNumber(num) {
//     return new Promise((resolve) => {
//         resolve(num + 10);
//     }).then(result => {
//         return result * 2;
//     }).then(result => {
//         console.log(result);
//     });
// }

// processNumber(5); // Outputs: 30
// =====================================================================

// Question: Given an array of URLs, write a function that fetches data from all the URLs using Promise.all and logs the results.

// async function fetchAll(urls) {
//     const promises = urls.map(url => fetch(url).then(response => response.json()));
//     try {
//         const results = await Promise.all(promises);
//         console.log(results);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchAll(['https://api.example.com/data1', 'https://api.example.com/data2']);


// ===============================================================================
// callbacks 
// ================================
// console.log('start');

// function importantAction(username,cb){
//     setTimeout(()=>{
//         return cb(`Hello  ${username}`)
        
//     },1000)
// }

// const message= importantAction('Max',(message)=>{
//     console.log(message);
    
// })

// console.log('stop');
// ====================================================================

// callback hell



// function asyncOperation1(callback) {
//     setTimeout(() => {
//       console.log('Operation 1 complete');
//       callback('result1');
//     }, 1000);
//   }
  
//   function asyncOperation2(result1, callback) {
//     setTimeout(() => {
//       console.log('Operation 2 complete with:', result1);
//       callback('result2');
//     }, 1000);
//   }
  
//   function asyncOperation3(result2, callback) {
//     setTimeout(() => {
//       console.log('Operation 3 complete with:', result2);
//       callback('result3');
//     }, 1000);
//   }
  
//   function asyncOperation4(result3, callback) {
//     setTimeout(() => {
//       console.log('Operation 4 complete with:', result3);
//       callback('result4');
//     }, 1000);
//   }
  
//   function myFun() {
//     asyncOperation1(function(result1) {
//       asyncOperation2(result1, function(result2) {
//         asyncOperation3(result2, function(result3) {
//           asyncOperation4(result3, function(result4) {
//             console.log('Final result:', result4);
//           });
//         });
//       });
//     });
//   }
  
//   myFun();
  
 
// ======================================================


// const util = require('util');

// const name = 'Alice';
// const age = 25;
// console.log(util.format('My name is %s and I am %d years old.', name, age));