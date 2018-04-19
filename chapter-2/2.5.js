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

const removeUndefined = (...values) => values.filter(value => value !== undefined);

const sum = values => values.reduce((total, value) => total += value, 0);

const splitIntoPlaceValues = (num) => {
  if (num === 0) {
    return { '1': 0 };
  }
  let place = 1;
  let currentValue = num;
  const result = {};
  while (currentValue >= place) {
    result[place] = Math.floor(currentValue % (place * 10) / place);
    place *= 10;
  }
  return result;
};

const sumLists = (llA, llB) => {
  const result = new LinkedList(null);
  let nodeA = llA, nodeB = llB;
  let placeValues = {};
  while (nodeA || nodeB) {
    placeValues = splitIntoPlaceValues(sum(removeUndefined(nodeA.value, nodeB.value, placeValues[10])))
    result.addToTail(placeValues[1]);
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  if (placeValues[10]) {
    result.addToTail(placeValues[10]);
  }
  return result.next;
};

export default sumLists;
