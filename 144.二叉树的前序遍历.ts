/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 */

class TreeNode {
       val: number
       left: TreeNode | null
       right: TreeNode | null
       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.left = (left===undefined ? null : left)
           this.right = (right===undefined ? null : right)
       }
   }
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

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const solveNode = (root: TreeNode | null) => {
    if(root !== null) {
      res.push(root.val)
      solveNode(root.left);
      solveNode(root.right);
    }
    return;
    
  }
  solveNode(root);
  return res;
};
// @lc code=end

