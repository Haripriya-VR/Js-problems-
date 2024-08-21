// 12. Find the output (with reason)

const arr = Array(2).fill({})
// arr.fill() // arr = [ {}, {} ] ,Both arr[0] and arr[1] point to the same object {}.
// Adding a property product to arr[1] modifies the shared object. Since arr[0] and arr[1] point to the same object, both elements reflect this change.

arr[1].product ='laptop'
console.log(arr);

// output :[ { product: 'laptop' }, { product: 'laptop' } ]
// fill() method changes all array elements to a static value based on start and end index.
//  start =0, end = arr.length
//  returns the modified array

// if the ist parameter is an object, each slot in the array reference that object.
// The fill() method fills empty slots in sparse arrays with value as well.


