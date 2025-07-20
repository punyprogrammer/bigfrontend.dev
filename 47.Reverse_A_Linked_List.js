/** 
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedList = (head) => {
    // your code
    let prev = null;
    let curr = head;
    while(curr!==null){
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr =nextNode;
    }
    return prev;
}
