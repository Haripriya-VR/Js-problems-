// const obj={
//     key1:[1,2,3],
//     key2:5,
//     key3:[4,5],
//     key4:'not an array'
// }
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

// function fact(n){
//     if(n <=0){
//         return 1
//     }
//     return n* fact(n-1)
// }

// console.log(fact(4));


// function fib(n){
//     if(n ==0 ){
//         return 0
//     }
//     if(n==1){
//         return 1
//     }
//     return fib(n-1) + fib(n-2)
// }
// console.log(fib(10)); // Output: 55

// =================================================
// binary search
// sorting algo
// hastable 
// stack
// =================================================

// BST 
// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if(this.root === null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(newNode.value <root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(root === null){
//             return false
//         }
//         if(root.value === value){
//             return true
//         }else if(value < root.value){
//           return  this.search(root.left,value)
//         }else {
//            return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }


//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     BFS(){
//         if(this.root === null){
//             return
//         }
//         let queue =[]
//         queue.push(this.root)
//         while(queue.length){
//             let cur = queue.shift()
//             if(cur.left !== null){
//                 queue.push(cur.left)
//             }if(cur.right !== null){
//                 queue.push(cur.right)
//             }
//         }
//     }
// // min, max,delete
// }

// const binaryST = new BST()
// binaryST.insert(10)
// binaryST.insert(20)
// binaryST.insert(30)
// binaryST.insert(2)
// binaryST.insert(7)
// console.log(binaryST.search(binaryST.root,20));

// binaryST.preOrder(binaryST.root)
// ===================================================================
// binarysearch

// function binarySearch(arr,target){
//     let left =0
//     let right= arr.length -1
//     while(left <= right){
//         let mid= Math.floor((left + right)/2)
//         if(target === arr[mid]){
//             return mid
//         }else if(target < arr[mid]){
//             right = mid -1
//         }else{
//             left =mid +1
//         }
//     }
//     return -1
// }

// const Check = binarySearch([1,2,3,4,5,20],20)
// console.log(Check);

// binarysearch using recursion



// ===================================================================

// sorting algorithms
// =====================================================================
// bubble sort 

// function bubbleSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//            let temp = arr[i]
//            arr[i]= arr[j]
//            arr[j]= temp
            
//         }
        
//     }
//     return arr
// }
// const arr = [9,3,7,5,4]
// let result = bubbleSort(arr)
// console.log(result);

// ======================================================================
// insertion sort

// function insertionSort(arr){
//     for (let i =1 ; i < arr.length; i++){
//         let insertNum = arr[i]
//         j= i-1
//         while(j>=0 && arr[i] >insertNum){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = insertNum
       
//     }
//     return arr
// }


// const arr=[8,4,6,5,2,3,9]
// let result = insertionSort(arr)
// console.log(result);

// ===========================================================================


