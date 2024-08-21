// insertion sorting algorithm works by virtually split array into a sorted and unsorted part Assume that the first element is already sorted 
// and remaining elements are unsorted . Select an unsorted element and compare with all elements in the sorted part.
// if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. else shift larger elements inthe sorted part towards the right.
// insert the selected element at the right index. Repeat till all the unsorted elements are placed in the right order.

// average time complexity = O(n2)


function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
       let numberToInsert = arr[i]
        j= i-1
        while(j>=0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j -1
        }
        arr[j+1]= numberToInsert
    }

    return arr
}
const arr = [9,3,7,5,4]
let result = insertionSort(arr)
console.log(result);




