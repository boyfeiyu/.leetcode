/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
// @lc code=start
//  Definition for singly-linked list.


function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let c = 0;
  let res = new ListNode(0, null);
  let p = l1, q = l2;
  let t = res;
  while(p && q) {
    t.val = c + p.val + q.val;
    c = Math.floor(t.val / 10);
    t.val %= 10;
    t.next = new ListNode(0, null);
    t = t.next;
  }


  return res;
}
// @lc code=end
