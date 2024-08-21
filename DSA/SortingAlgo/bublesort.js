// bubble sort is a simple sorting algorithm which works by repeatedly swapping the adjcent elements if they are wrong in order

// best case time complexity = o(n) average and worst case = O(n2) space complexity = O(1)
// It is not good for large data sets due to this high time complexity and inefficiency
// it is an inplace algo as it is not using any etc memory

function bubleSort(arr){
    let temp
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            temp = arr[i]
            arr[i]= arr[j]
            arr[j] = temp
            
        }
    }
    return arr
}

const arr = [9,3,7,5,4]
let result = bubleSort(arr)
console.log(result);





