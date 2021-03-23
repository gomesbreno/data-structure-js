const BinarySearchTreeNode = require("./BinarySearchTreeNode");

class BinarySearchTree {
  /**
   * @param {function} [nodeValueCompareFunction]
   */
  constructor(nodeValueCompareFunction) {
    this.root = new BinarySearchTreeNode(null, nodeValueCompareFunction);

    // Steal node comparator from the root.
    this.nodeComparator = this.root.nodeComparator;
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    return this.root.insert(value);
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    return this.root.contains(value);
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    return this.root.remove(value);
  }

  /**
   * @return {number}
   */
  getHeight() {
    return this.root.height;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.root.toString();
  }

  /**
   * @return {string}
   */
  toStringInLevelOrder() {
    return this.root.toStringInLevelOrder();
  }
}

module.exports = BinarySearchTree;
