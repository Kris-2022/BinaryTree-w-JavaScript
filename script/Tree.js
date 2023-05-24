
class Node {
  constructor(name, salary, parent) {
    this.name = name;
    this.salary = salary;
    this.parentNode = parent;
    this.rightNode = null;
    this.leftNode = null;
    this.searchNode=null;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getParentNode() {
    return this.parentNode;
  }

  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }

  getRightNode() {
    return this.rightNode;
  }

  setRightNode(rightNode) {
    this.rightNode = rightNode;
  }

  getLeftNode() {
    return this.leftNode;
  }

  setLeftNode(leftNode) {
    this.leftNode = leftNode;
  }

  toString() {
    return this.name;
  }
}





class Tree {
  constructor() {
    this.root = null;
    this.size = 0;
    this.s = "";
    this.list = [];
    this.search = null;
  }

  addRoot(n) {
    if (this.size === 0) {
      this.root = n;
      this.size++;
    } else {
      console.log("(Error. There is already a root in this tree.)");
    }
  }

  root() {
    if (this.size === 0) {
      return null;
    }
    return this.root;
  }


  parent(p) {
    if (this.size === 0) {
      console.log("(Error. The tree is currently empty.)");
    }
    if (p === this.root.getName()) {
      return null;
    }
    var current = this.nodeFinder(this.root, p);
    if (current === undefined) {
      console.log("(Error. The worker " + p + " was not found in this tree.)");
    }
    else
      return this.current.getParentNode();
  }


  left(p) {
    if (this.size === 0) {
      console.log("(Error. The tree is currently empty.)");
    }
    var current = this.nodeFinder(this.root, p);
    if (current === undefined) {
      console.log("(Error. The worker " + p + " was not found in this tree.)");
    }

    else {
      if (current.getLeftNode() === null) {
        return null;
      }
      return this.current.getLeftNode();
    }
  }


  right(p) {
    if (this.size === 0) {
      console.log("(Error. The tree is currently empty.)");
    }
    var current = this.nodeFinder(this.root, p);
    if (current === null) {
      console.log("(Error. The worker " + p + " was not found in this tree.)");
    }
    else {
      if (current.getRightNode() === null) {
        return null;
      }
      return this.current.getRightNode();
    }
  }


  size() {
    return this.size;
  }


  listAll() {
    this.list = [];
    this.recursionList(this.root);
    return this.list;
  }

  recursionList(n) {
    this.list.push([n.getName(), n.getSalary(), n.getParentNode()])
    if (n.getLeftNode() !== null) {
      this.recursionList(n.getLeftNode());
    }
    if (n.getRightNode() !== null) {
      this.recursionList(n.getRightNode());
    }
  }



  nodeFinder(n, p) {
    if (n.getName() == p) {
      this.searchNode=n;
    }
    if (n.getLeftNode()){
      this.nodeFinder(n.getLeftNode(), p);
    }
    if (n.getRightNode()) {
      this.nodeFinder(n.getRightNode(), p);
    }
  }
}
