// Quick Sort is a highly efficient sorting algorithm that uses the divide-and-conquer strategy.Quick sort is a sorting algorithm working 
// by identifying the pivot element in the array put eveything that's smaller than the pivot and the elements greater thatn the pivot to the right part of the array 
// repeat this process for the individual left and right arrays' and then concatinate the left and right array
// to get a complete sorted array

// time complexity
// Average Case and best: O(nlogn)
// worst case :O(n2)

function QuickSort(arr){
    if(arr.length <2){
        return arr
    }
    let pivot = arr[arr.length -1]
    let left =[]
    let right =[]
    for (let i = 0; i < arr.length -1; i++) {
        if(arr[i]< pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
        
    }
    return [...QuickSort(left),pivot,...QuickSort(right)]
}
const arr = [9,3,7,5,4]
let result = QuickSort(arr)
console.log(result);


// ==============================================================
// QuickSort


