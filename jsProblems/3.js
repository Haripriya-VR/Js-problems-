// largest prime number in an array

const arr =[4,5,7,8,9,11,12,17,97,47]

function isPrime(num){
    if(num % 2 ==0 || num < 2){
        return false
    }
    for(let i = 3 ; i <= Math.sqrt(num); i+=2){
        if(num % 2 == 0 ) return false;
    }
    return true
}

console.log(arr.sort((a,b)=> a-b ).findLast(isPrime)); 
//  output is 97 
// explaination: first function to check prime or not is created 
//  then the array is sorted and then it finds the last number in the array
// satisfies the isPrime function.

