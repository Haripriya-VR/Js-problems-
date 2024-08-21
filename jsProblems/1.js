// Find the output with reason(scope)

// var x = Math.floor(Math.random())
// // here x = 0
// if(x>0.5){
//     var x =1
// }else{
//     var x =2
// }
// console.log(x); 
// output is 2  here the x is overwriten as both are declared in the gobal scope


// ==============================================
// process.nextTick

// console.log('start');
// process.nextTick(()=>{
//     console.log('middle');
    
// })
// console.log('End');
// ===============================================

// console.log(true + true);

for(var i =0 ; i<5; i++){
    setTimeout(()=>{
        console.log(i);
        
    },1000)
}