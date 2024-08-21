// Flatten an array of arrays

let arr =[[0,1],[2,3],[4,5]]

// 1st method

const flattenedArr = arr.flat()
console.log(flattenedArr);

// 2nd method 

const flatArr = arr.reduce((pre,current)=> pre.concat(...current))
//  prev =[0,1] current =[2,3] then on concat to prev updated to [0,1,2,3]
console.log(flatArr);
