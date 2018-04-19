/*
 * Interview Questions (Part VIII)
 * Chapter 2: Linked Lists
 * Problem 2.3
 *
 *
 * You have two numbers represented by a linked list, where each node containes a single
 * digit. The digits are stored in reverse order, such that the 1's digits is at the head
 * of the list. Write a function that adds the two numbers and returns the sum as a linked
 * list.
 *
 * EXAMPLE:
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295.
 * Output: 2 -> 1 -> 9. That is 912.
 *
 * Follow Up
 * Suppose the digits are stored in the forward order. Repeat the above problem.
 *
 * EXAMPLE:
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
 * Output: 9 -> 1 -> 2. That is 912.
 *
 * Hints #7, #30, #71, #95, #109
*/

import LinkedList from '../helpers/LinkedList';

const sumLists = (llA, llB) => {
  const result = new LinkedList(null);
  let carry = 0, sum;
  let nodeA = llA;
  let nodeB = llB;
  while(nodeA || nodeB) {
    sum = (nodeA.value || 0) + (nodeB.value || 0) + carry;
    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    result.addToTail(sum);
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  if (carry) {
    result.addToTail(carry);
  }
  return result.next;
};

export default sumLists;
