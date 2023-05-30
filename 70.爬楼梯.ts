/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  // i表示前一步的状态，j表示前两步需要的状态
  const dp : number[] = [];
  dp[1] = 1;
  dp[2] = 2;
  for(let k=3; k<=n; k++) {
    dp[k] = dp[k-1] + dp[k-2];
  }
  return dp[n];
};
// @lc code=end

console.log(climbStairs(7));
