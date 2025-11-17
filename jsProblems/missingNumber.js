// missing number of an array | using count

// let arr=[1,2,3,5,6]
// let counts =10
// function missingNumber(arr,count){
//     let missingNum=[]
//     for (let i = 1; i <= count; i++) {
//         let found=false
      
//      for (let j = 0; j < arr.length; j++) {
//         if(i === arr[j]) {
//             found = true
//             break;
//         }
//      }
//      if(!found){
//         missingNum.push(i)
//      }
         
//     }
//     arr.push(...missingNum)
//     return arr
    
// }

//  const result = missingNumber(arr,counts)
//  console.log(result);
// ==========================================================

//  using sum

// let arr = [1,2,3,5,6]

// function missingNum(arr,n){
//     let total = (n*(n + 1))/2
//     let sum =0

//     for (let i = 0; i < arr.length; i++) {
        
        
//         sum += arr[i]
        
//     }
    
//     return  total-sum
// }

// const result =missingNum(arr,6)
// console.log(result);
// ==============================================================
