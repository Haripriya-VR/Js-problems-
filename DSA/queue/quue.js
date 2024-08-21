// queue using array

class Queue {
    constructor(){
        this.items =[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
       return this.items.shift()
    }
    isEmpty(){
        return this.items.length ===0
    }
    peak(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    getSize(){
       return  this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
    
}

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.peak());
queue.dequeue()
queue.print()



// ========================================================================================


// Queue using linked list

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
//   class Queue {
//     constructor() {
//       this.front = null;
//       this.rear = null;
//     }
//     enqueue(element) {
//       const newNode = new Node(element);
  
//       if (!this.rear) {
//         this.front = newNode;
//         this.rear = newNode;
//       } else {
//         this.rear.next = newNode;
//         this.rear = newNode;
//       }
//     }
//     dequeue() {
//       if (!this.front) {
//         return "Queue is empty";
//       }
//       const removedNode = this.front;
//       this.front = this.front.next;
//       if (!this.front) {
//         this.rear = null;
//       }
//       return removedNode.data;
//     }
//     frontElement() {
//       return this.front ? this.front.data : "Queue is empty";
//     }
//     isEmpty() {
//       return !this.front;
//     }
//     size() {
//       let count = 0;
//       let current = this.front;
//       while (current) {
//         count++;
//         current = current.next;
//       }
//       return count;
//     }
//     printQueue() {
//       let current = this.front;
//       const queueElements = [];
//       while (current) {
//         queueElements.push(current.data);
//         current = current.next;
//       }
//       console.log(queueElements);
//     }
//   }
//   let myQueue = new Queue();
  
//   myQueue.enqueue(1);
//   myQueue.enqueue(2);
//   myQueue.enqueue(3);
//   console.log("Front of the queue:", myQueue.frontElement()); 
//   console.log("Dequeue:", myQueue.dequeue()); 
//   console.log("Queue size:", myQueue.size()); 
//   myQueue.printQueue(); 
//   ==========================================================

function reverseStringWithQueue(inputString) {
    let characters = inputString.split('');
    let queue = [];
    characters.forEach(character => {
      queue.push(character);
    });
    for (let i = characters.length - 1; i >= 0; i--) {
      characters[i] = queue.shift();
    }
  
    let reversedString = characters.join('');
  
    return reversedString;
  }
  let originalString = "Hello, World!";
  let reversedString = reverseStringWithQueue(originalString);
  console.log(reversedString);
