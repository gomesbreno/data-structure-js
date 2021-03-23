const BinarySearchTree = require("./tree/binary-search-tree/BinarySearchTree");
const AvlTree = require("./tree/avl-tree/AvlTree");

const bst = new BinarySearchTree();
const avlt = new AvlTree();

bst.insert(1);
bst.insert(2);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(4);

console.log(`Binary tree heigth: ${bst.getHeight()}`);
console.log(`Binary tree in order: ${bst.toString()}`);
console.log(`Binary tree in level order: ${bst.toStringInLevelOrder()}`);

avlt.insert(1);
avlt.insert(2);
avlt.insert(3);
avlt.insert(4);
avlt.insert(5);
avlt.insert(6);
avlt.insert(7);
avlt.insert(8);

console.log(`Avl tree heigth: ${avlt.getHeight()}`);
console.log(`Avl tree in order: ${avlt.toString()}`);
console.log(`Avl tree in level order: ${avlt.toStringInLevelOrder()}`);

const isBalanced = (s) => {
  let n = -1;
  while (s.length != n) {
    n = s.length;
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }
  if (s.length == 0) return "YES";
  else return "NO";
};

const line1 = "{[()]}";
const line2 = "{[(])}";
const line3 = "{{[[(())]]}}";

console.log(`linee1 is balanced: ${isBalanced(line1)}`);
console.log(`linee2 is balanced: ${isBalanced(line2)}`);
console.log(`linee3 is balanced: ${isBalanced(line3)}`);
