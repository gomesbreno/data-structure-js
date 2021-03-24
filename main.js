// árvores
/*
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

// balanço de chaves
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
const line4 =
  "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]";

console.log(`linee1 is balanced: ${isBalanced(line1)}`);
console.log(`linee2 is balanced: ${isBalanced(line2)}`);
console.log(`linee3 is balanced: ${isBalanced(line3)}`);
console.log(`linee4 is balanced: ${isBalanced(line4)}`);
*/

// heaps
/*
const MinHeap = require("./heap/MinHeap");
const MaxHeap = require("./heap/MaxHeap");

const maxHeap = new MaxHeap();
const minHeap = new MinHeap();

// const maxHeap = new PriorityQueue();
// const minHeap = new PriorityQueue();

const addNumber = (n) => {
  if (maxHeap.isEmpty()) {
    maxHeap.add(n);
  } else if (maxHeap.size() == minHeap.size()) {
    if (n < minHeap.peek()) {
      maxHeap.add(n);
    } else {
      minHeap.add(n);
      maxHeap.add(minHeap.remove());
    }
  } else if (maxHeap.size() > minHeap.size()) {
    if (n > maxHeap.peek()) {
      minHeap.add(n);
    } else {
      maxHeap.add(n);
      minHeap.add(maxHeap.remove());
    }
  }
  // maxHeap will never have fewer elements than minHeap
};

const getMedian = () => {
  if (maxHeap.isEmpty()) {
    return 0;
  } else if (maxHeap.size() == minHeap.size()) {
    return (maxHeap.teste() + minHeap.peek()) / 2.0;
  } else {
    // maxHeap must have more elements than minHeap
    return maxHeap.peek();
  }
};

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results = [];
for (let i = 0; i < a.length; i++) {
  addNumber(a[i]);
  results.push(getMedian().toFixed(1));
}
console.log(results.join("\n") + "\n");
*/

// contact list

function contacts(queries) {
  const contactList = [];
  const resultsOfSearchsOnList = [];
  for (let i = 0; i < queries.length; i++) {
    const [action, value] = queries[i];
    if (action === "add") {
      contactList.push(value);
    } else {
      const searchListResults = contactList.filter((item) => {
        if (item.includes(value)) {
          return true;
        }
        return false;
      });
      resultsOfSearchsOnList.push(searchListResults.length);
    }
  }
  return resultsOfSearchsOnList;
}

// buscar contatos com a substring de busca com complexidade O(1)
function contacts2(queries) {
  const resultsOfSearchsOnList = [];
  let map = new Map();
  for (let i = 0; i < queries.length; i++) {
    const [action, value] = queries[i];

    if (action === "add") {
      for (let j = 1; j <= value.length; j++) {
        let sub = value.substring(0, j);
        if (map.get(sub) == null) {
          map.set(sub, 1);
        } else {
          map.set(sub, map.get(sub) + 1);
        }
      }
    } else {
      //query matches
      if (map.get(value) == null) {
        resultsOfSearchsOnList.push(0);
      } else {
        resultsOfSearchsOnList.push(map.get(value));
      }
    }
  }
  return resultsOfSearchsOnList;
}

queries = [
  ["add", "s"],
  ["add", "ss"],
  ["add", "sss"],
  ["add", "ssss"],
  ["add", "sssss"],
  ["find", "s"],
  ["find", "ss"],
  ["find", "sss"],
  ["find", "ssss"],
  ["find", "sssss"],
  ["find", "ssssss"],
];
const results = contacts2(queries);
console.log(results.join("\n") + "\n");

// stringfy
// split
// lenght
