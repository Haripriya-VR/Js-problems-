// 9. Find the output of the below code(with reason)
function print(x){
    if(x<=1){
        print(x+1)
        console.log('x in if block is' + x);
        
    }else if(x >= 1000000000000){
        console.log('x in if block is' + x);
    }
    print(x+1)
}

print(0);

// RangeError: maxmum  call stack exeeded.