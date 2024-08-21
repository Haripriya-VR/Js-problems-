// Merge sort is working in a way that divide the array into sub arrays each containing only one element 
// repeatedly merge the sub arrays to produce new sorted arrays until there is only one sub array remaining . That will be sorted array.

// time complexity
// Average Case and best and worst: O(nlogn)
// space =O(n)
function mergeSort(arr){
    if(arr.length <2){
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArr,rightArr){
    let sortedArr =[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]< rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [ ...sortedArr,...leftArr,...rightArr]
}

const arr = [9,3,7,5,4]
let result = mergeSort(arr)
console.log(result);

// never miss an hour again


// ==============================================================

function mergeSort(arr){
    
}

