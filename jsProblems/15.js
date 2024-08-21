// Split Array items into individual words

const arr = ['I want to become ', 'a professional full stack ','developer']

console.log(arr);


// shallow copy
// explained in doc js

let x='ani'
let y = x
y='ab'
console.log(y);// ab
console.log(x); // ani


//  deep copy

let obj ={a:'ani' ,b:'ab',c:{d:'abc'}}

let obj1= JSON.parse(JSON.stringify(obj))

console.log(obj1);


