// generator function

function* genaratorFun(){
    let num =0
    while(true){
       yield num
       num += 2
    }
}

let even = genaratorFun()

for (let i = 0; i < 5; i++) {
    console.log(even.next().value);
    
}

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const numbers = range(1, 5);
for (const num of numbers) {
    console.log(num);
}
// Output: 1 2 3 4 5

let str = "123";
let num = 4;
let result = str + num;  // The number is coerced to a string and concatenated
console.log(result);     // "1234"
console.log(typeof result); // "string"


let foo = null ?? 'default value';
console.log(foo); // 'default value'

