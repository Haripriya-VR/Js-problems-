class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (root === null) {
            return false;
        }
        if (root.value === value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    BFS() {
        if (this.root === null) {
            return;
        }
        
        const queue = [];
        queue.push(this.root);
        
        while (queue.length) {
            const currentNode = queue.shift();
            console.log(currentNode.value);
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }
}

// // Example usage:
// const BST = new BinarySearchTree();

// console.log('Is empty:', BST.isEmpty());

// BST.insert(10);
// BST.insert(5);
// BST.insert(15);
// BST.insert(3);
// BST.insert(7);

// console.log(BST.search(BST.root, 10)); // true
// console.log(BST.search(BST.root, 20)); // false
// console.log(BST.search(BST.root, 3));  // true

// BST.preOrder(BST.root);  // 10 5 3 7 15
// BST.inorder(BST.root);   // 3 5 7 10 15
// BST.postOrder(BST.root); // 3 7 5 15 10
// BST.levelOrder(BST.root);        // 10 5 15 3 7


// ========================================================================




// ==============================================================

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === 0
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }

    }
    insertNode(root,newNode){
        if(newNode.value <root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                return this.insertNode(root.left ,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                return this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(root === null){
            return false
        }if(root.value === value){
            return true
        }else if(value <root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }

    preOrder(){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inorder(){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    postOrder(){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    BFS(){
        if(this.root === null){
            return
        }
        let queue =[]
        queue.push(this.root)
        while (queue.length) {
            const cur = queue.shift()
            console.log(cur.value);
            if(cur.left !== null){
                queue.push(cur.left)
            }
            if(cur.right !== null){
                queue.push(cur.right)
            }
        }
    }


}








