// Example usage
// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// console.log(mergeIntervals(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]



// function mergeIntervals(intervals){
// let cur = intervals[0]
// let merged =[]
// for (let i = 1; i < intervals.length; i++) {
//     const [curStart,curEnd]= cur
//     const [nextStart,nextEnd]= intervals[i]
//     if(nextStart<curEnd ){
//         cur = [curStart,Math.max(curEnd,nextEnd)]
//     }else{
//         merged.push(cur)
//         cur = intervals[i]
//     }
    
// }
// merged.push(cur)
//     return merged
    
// }
// ============================================================

