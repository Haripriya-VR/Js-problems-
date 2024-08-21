// impure functions
// let sum = 0;
// function addToSum(value) {
   
//     sum += value;
//     return sum;
// }

// console.log(addToSum(5)); 
// console.log(addToSum(5)); 
// =====================================
// pure fucntion

// function myfun(value){
//     let sum =0
//     sum +=value
//     console.log(sum);
    
// }

// myfun(2)
// myfun(2)
// ===========================================
// constructor function

// function person({age,name}){
//     this.name = name
//     this.age = age
// }
// const person1 = new person({name:'Max',age:22})
// console.log(person1);

// ============================================================================

// factory function :

// function myFun(name,age){
//     return {
//         name:name,
//         age:age,
//         greet(){
//             console.log(`Hello , my name is ${this.name} and my age is ${this.age}`);
            
//         }
//     }
// }


// const person1 = myFun('Max', 20)
// const person2 = myFun('Alice',16)

// person1.greet()
// person2.greet()
// ====================================================================

//  generator function

// function* range(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }

// for (let num of range(1, 5)) {
//     console.log(num);
// }







