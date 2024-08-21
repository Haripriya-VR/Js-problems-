// // Write a function to find the intersection of two arrays.

// const arr =[1,2,6,4,3]

// const arr1 = [4,3,5,6]

// function intersection(arr,arr1){
//     const interArr =[]
//    for (let i = 0; i < arr.length; i++) {
//     if(arr1.includes(arr[i])){
//         interArr.push(arr[i])
//     }
//    }
//    console.log(interArr);
// }
// intersection(arr,arr1)
// // Write a function to find the union of two arrays.
// const arr=[1,2,3,3]
// const arr1 =[4,2,3,5,1,3]
// function unionArr(arr,arr1){
//     const newArr = arr.concat(arr1)
// }


// const sample = arr => arr[Math.floor(Math.random()* arr.length )];
// console.log(sample([3, 7, 9, 11]));


// const arr2 = [1,2,6,10,4,5]
// console.log(arr2.sort());


// // write a function to merge and remove duplicates

// const arr =[1,2,3,4,5,4,3,6,8,7]

// const arr1 = [1,9,7,6,6,4,46,3,12,13,16]

// // function mergeAndRemove(arr,arr1){
// //     const mergedArr = arr.concat(arr1)
// //     const newArr =[... new Set(mergedArr)]

// //     console.log(newArr);


// // }


// function mergeAndRemove(arr,arr1){
//     let newArr =[]
//     for (let i = 0; i < arr.length; i++) {
//        newArr.push(arr[i])
//     }
//     for (let j = 0; j < arr1.length; j++) {
//         newArr.push(arr1[j])
//     }
//     console.log(newArr);
// }



// mergeAndRemove(arr,arr1)



// // remove duplicates 

// const arr = [1,1,4,4,3,6,6,7,3,4,6,8,7,9,2]
// // function removeDuplicates(arr){
// //     const newSet = [ ...new Set(arr)]
// //     console.log(newSet);
// // }
// function removeDuplicates(arr) {
//     const newArr =[]
//     for (let i = 0; i < arr.length; i++) {
//         let isduplicate= false
       
//         for (let j = i+1; j < arr.length; j++) {
//            if(arr[i] === arr[j]){
//             isduplicate = true
//             break;
//            }
            
//         }
//         if(!isduplicate){
//             newArr.push(arr[i])
//         }

        
//     }
//     console.log(newArr);
// }


// removeDuplicates(arr);
