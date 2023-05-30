/*
 * @lc app=leetcode.cn id=292 lang=typescript
 *
 * [292] Nim 游戏
 */

// @lc code=start
function canWinNim(n: number): boolean {
  // 先手是4的倍数必输
  return n % 4 !== 0;
};
// @lc code=end

