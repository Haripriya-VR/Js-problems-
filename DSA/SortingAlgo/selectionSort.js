// Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element
//  from the unsorted portion of the list and moving it to the sorted portion of the list. 

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

let result = selectionSort([11, 2, 6, 4, 77, 8, 3, 0]);
console.log(result);

// ============================================================================


