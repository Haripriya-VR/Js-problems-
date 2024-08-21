// linked list implementation

// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.size === 0
//     }
//     getSize() {
//         return this.size
//     }
//     // O(1) time complexity
//     prepend(data) {
//         const node = new Node(data)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     // O(n)
//     append() {
//         const node = new Node(data)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(data,index){
//         if(index <0 || index >this.size){
//             return false
//         }else if(index ===0){
//             this.prepend(data)
//         }else{
//             const node = new Node(data)
//             let prev = this.head
//             for(let i=0;i<index -1;i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++

//         }

//     }

// removeFrom(index){
//     if(index <0 || index > this.size){
//         return false
//     }
//     let removeNode
//     if(index === 0){
//         removeNode = this.head
//         this.head = this.head.next;
        
//     }else{
//         let prev= this.head
//         for(let i=0; i < index -1; i++){
//             prev = this.head
//         }
//         removeNode = prev.next
//         prev.next = removeNode.next
//     }
//     this.size--
//     return removeNode.value

// }

// removeValue(value){
//     if(this.isEmpty()){
//         return null
//     }
//     if(this.head.value === value){
//         this.head = this.head.next
//     }

//     this.size--
//     return value

// }


    
//     print() {
//         if (this.isEmpty()) {
//             console.log('list is empty');
//         } else {
//             let cur = this.head
//             let listValues = ''
//             while (cur) {
//                 listValues += `${cur.data+' '}`
//                 cur = cur.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.insert(25,2)

// list.print()

// =========================================================

class Node{
    constructor(value){
        this.value = value
        this.next =null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size =0
    }

    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    append(value){
        const NewNode = new Node(value)
        if(this.isEmpty()){
            this.head = NewNode
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = NewNode
        }
        this.size++
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return false
        }else if(index === 0){
            this.prepend(value)
        }else if(index === this.size){
            this.append(value)
        }else{
            const newNode = new Node(value)
            let prev = this.head
            for(let i=1; i<index -1; i++){
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
            this.size++
        }
    }

    delete(value,index){
        
    }


    display(){
        let current = this.head
        while(current){
            console.log(current.value);
            current = current.next
        }
    }
}


let list =new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.insert(1,2)
list.prepend(40)
list.display()


