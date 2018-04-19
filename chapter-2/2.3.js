/*
 * Interview Questions (Part VIII)
 * Chapter 2: Linked Lists
 * Problem 2.3
 * 
 * 
 * Implement an algorithm to delete a node in the middle of
 * a singly linked-list, given only access to that node.
 * 
 * Example:
 * Input: Node C from linked list a -> b -> c -> d -> e
 * Result: Nothing is returned, but new linked list is a -> b -> d -> e
 *
*/

const deleteNode = node => {
  const next = node.next;
  node.value = next.value;
  node.next = next.next;
};

export default deleteNode;
