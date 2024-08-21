// add element to an Array

const arr= [1,2,3,5,6]

function addElement(arr,index,target){
    let newArr =[]
    for (let i = 0; i < index; i++) {
        newArr.push(arr[i])
        
    }
    newArr.push(target)
    for (let j = index; j < arr.length; j++) {
        newArr.push(arr[j])
        
    }
    console.log(newArr);
    
}

addElement(arr,3,4)