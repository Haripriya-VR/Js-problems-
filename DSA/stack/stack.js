// stack implementation

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }
    push(value){
        const node = new Node(value)
        
            node.next = this.top
            this.top =node
        
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        let poppedData =this.top.value
        this.top = this.top.next
        this.size--
        return poppedData
    }
    peak(){
        return this.top.value
    }

    isEmpty(){
        return this.size === 0
    }
}

function reverseString(input){
    const stack = new Stack
    for (let char of input) {
        stack.push(char)
    }
    let reverse =''
    while(!stack.isEmpty()){
       reverse += stack.pop()
    }
    return reverse
}
const input ='Hello'

console.log(reverseString(input));

// =================================================

