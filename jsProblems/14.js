// Find the items that exists only once in an array

const arr = [1,2,3,4,5,3,2]


const result = arr.filter((num)=>{return arr.indexOf(num) === arr.lastIndexOf(num)} )

console.log(result);

// output : [1,4,5]  logic : filter method takes a calback function and returns an array with which the condition satisifies
// then if the indexOf(2) at ist is 1 and it is !=== lastIndexOf(2) with is 6 so it gives fales and doesnot satisfies the condition
// ===================================================================================================================
// filter() method creates a shallow copy of a portion of a given array, filtered down to elements
// that pass the test implemented by the provided function

// A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.

// The indexOf() method returns the first index at wich a given element can be found in the array, or -1 if not present

//  The LastIndexOf() method returns the last indext at which a given element can be found in the array, or -1 if it is not present. 
// The array is searchd backwards , starting at fromIndex.


