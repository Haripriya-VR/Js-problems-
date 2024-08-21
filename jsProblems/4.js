//  Remove duplicates from an array


const arr = [1,3,3,2,2,1]

const strArr = ['hello','mike','hello']

function removeDuplicates(num){
    let se = new Set(num)
    return [...se]
}
// ============================

let uniqueArr = [... new Set(arr)]
console.log(uniqueArr);
// ==========================================
let result = removeDuplicates(strArr)
// output [ 1, 3, 2 ] [ 'hello', 'mike' ]
console.log(result);
