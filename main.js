const BinarySearchTree = require("./tree/binary-search-tree/BinarySearchTree");
const AvlTree = require("./tree/avl-tree/AvlTree");

const bst = new BinarySearchTree();
const avlt = new AvlTree();

/*
bst.insert(1);
bst.insert(2);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(4);

// console.log(` binary tree in order: ${bst.toString()}`);
console.log(`binary tree in level order: ${bst.toStringInLevelOrder()}`);
*/

avlt.insert(1);
avlt.insert(2);
avlt.insert(3);
avlt.insert(4);
avlt.insert(5);
avlt.insert(6);
avlt.insert(7);
avlt.insert(8);

console.log(`avl tree Heigth: ${avlt.getHeight()}`);
console.log(`avl tree in order: ${avlt.toString()}`);
console.log(`avl tree in level order: ${avlt.toStringInLevelOrder()}`);
