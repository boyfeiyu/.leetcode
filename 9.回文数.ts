/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const str = x.toString()
  if(str === str.split('').reverse().join('')) {
    return true;
  }
  return false;
};
// @lc code=end

