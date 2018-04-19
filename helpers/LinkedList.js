class LinkedList {
  constructor (value) {
    this.value = value;
    this.next = null;
  }

  addToTail(value) {
    let node = this;
    while (node.next) {
      node = node.next;
    }
    node.next = new LinkedList(value);
  }

  findByValue(value) {
    if (this.value === value) {
      return this;
    } else if (this.next) {
      return this.next.findByValue(value);
    }
    return null;
  }
}

export default LinkedList;
