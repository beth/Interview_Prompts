import LinkedList from '../../helpers/LinkedList';
import sumLists from '../2.5';
import { expect } from 'chai';

describe('sumLists', () => {
  it('should be a function', () => {
    expect(sumLists).to.be.a('function');
  });

  it('should return a linked list', () => {
    let linkedListA = new LinkedList(7);
    linkedListA.addToTail(1);
    linkedListA.addToTail(6);
    let linkedListB = new LinkedList(5);
    linkedListB.addToTail(9);
    linkedListB.addToTail(2);
    let expectedLinkedList = new LinkedList(2)
    expectedLinkedList.addToTail(1);
    expectedLinkedList.addToTail(9);
    expect(sumLists(linkedListA, linkedListB)).to.be.an.instanceOf(LinkedList);
  });

  it('should add the two numbers correctly', () => {
    let linkedListA = new LinkedList(7);
    linkedListA.addToTail(1);
    linkedListA.addToTail(6);
    let linkedListB = new LinkedList(5);
    linkedListB.addToTail(9);
    linkedListB.addToTail(2);
    let expectedLinkedList = new LinkedList(2)
    expectedLinkedList.addToTail(1);
    expectedLinkedList.addToTail(9);
    expect(sumLists(linkedListA, linkedListB)).to.deep.equal(expectedLinkedList);
  });

  it('should add an additional node to the linked list when needed', () => {
    let linkedListA = new LinkedList(7);
    linkedListA.addToTail(1);
    linkedListA.addToTail(6);
    let linkedListB = new LinkedList(5);
    linkedListB.addToTail(9);
    linkedListB.addToTail(7);
    let expectedLinkedList = new LinkedList(2)
    expectedLinkedList.addToTail(1);
    expectedLinkedList.addToTail(4);
    expectedLinkedList.addToTail(1);
    expect(sumLists(linkedListA, linkedListB)).to.deep.equal(expectedLinkedList);
  });
});