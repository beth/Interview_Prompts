import LinkedList from '../../helpers/LinkedList';
import deleteNode from '../2.3';
import { expect } from 'chai';

describe('deleteNode', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    linkedList.addToTail('e');
  })
  it('should be a function', () => {
    expect(deleteNode).to.be.a('function');
  });

  it('should remove a node from the middle', () => {
    const c = linkedList.findByValue('c');
    deleteNode(c);
    const expectedLinkedList = new LinkedList('a');
    expectedLinkedList.addToTail('b');
    expectedLinkedList.addToTail('d');
    expectedLinkedList.addToTail('e');
    expect(linkedList).to.deep.equal(expectedLinkedList);
  });
});