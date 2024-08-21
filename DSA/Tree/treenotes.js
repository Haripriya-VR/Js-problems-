
// Binary tree is a non linear data structure in which a collection of 
// elements known as nodes are connected to each other via edges such that
// there exists exactly one path between nodes.

// Terminologies
// parent node :  The node which is a predecessor of a node is known as parent node.
// child node : The node which is the immediate successor of a node is known as child node.
// Root node : The topmost node of a tree is known as the root node.
// Leaf node : The nodes donot have any child elements are known as leaf nodes.
// Ancestor node : Any predecessor on the path of the root node to that node is known as ancestors.
// sibilings : The nodes share the same parents are called sibilings
// Descentend : node Y is a descentent of x , only if x is the ancestor of y.
// Neighbor of the node : The parent or child node of a node is known as neighbor of a node.


// Applications of Tree Data Structure
// File System:  This allows for efficient navigation and organization of files.
// Data Compression: Huffman coding is a popular technique for data compression that involves constructing a binary tree where the leaves represent characters and their frequency of occurrence. The resulting tree is used to encode the data in a way that minimizes the amount of storage required.
// Compiler Design: In compiler design, a syntax tree is used to represent the structure of a program. 
// Database Indexing: B-trees and other tree structures are used in database indexing to efficiently search for and retrieve data.
// ===============================================================================

// Binary Search Tree : Is a data structure for organizing and storing data in a sorted manner.
// Each node in the binary search tree has at most two nodes. a left child node and a right child node.
// with the left child node values less the parent element and the right node with values greater than the parent element.
// This hierarchial structure allows for efficient searching ,insertion and deletion operations on the data stored in the tree.

// ============================================================================================================

// tree traversal
// in hierarchial data structure like a tree can be traversed in different ways
// 1. Depth first search (DFS)
// 2.Breadth First Search(BFS)


// Depth first search (DFS):
// ==========================
//  The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking
// Visit the root node, vist all the nodes in left sub tree and visti all nodes in right sub tree

// Depending on the order in which we do this, there is three types of DFS traversals
// 1. preorder
// 2.Inorder
// 2.post order


// preorder : Read the data of the node , visit the left sub tree, vist the right sub tree.
// inorder : vist the left subtree, read the data of the node, vist the right sub tree
// post order : vist left subtree, vist the right subtree, read the data of the node



// BFS - breath first search 
// ==========================

// Explores all nodes at the perticular depth prior to moving to the next depth.
// step 1 : create a queue
//  step 2 : enqueue the root node
// step 3 : As long as a node exisits in the queue
            // a. Dequeue the node from the front
            // b. Read the node's value
            // c. Enqueue the node's left child if it exists
            // d. Enqueue the node's right child if it exists


// ====================================================================================================================================

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class bst{
constructor(){
this.root = null
}
isEmpty(){
    this.root === null
}
insert(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.root = node
    }else{
        this.insertNode(this.root,node)
    }
}


}



