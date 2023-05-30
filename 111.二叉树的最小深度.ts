/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  } else {
    let minSubtreeDeep = 99999;
    if (root.left) {
      minSubtreeDeep = Math.min(minDepth(root.left), minSubtreeDeep)
    }
    if (root.right) {
      minSubtreeDeep = Math.min(minDepth(root.right), minSubtreeDeep)
    }
    if(root.left === null && root.left === null) {
      return 1;
    }
    return 1 + minSubtreeDeep;
  }
};
// @lc code=end

