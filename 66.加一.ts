/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const res = digits;
  res[res.length - 1] += 1;

  for(let i=res.length-1; i>=1; i--) {
    let c = 0;
    c = Math.floor(res[i] / 10);
    res[i] %= 10;
    res[i-1] += c;
  }
  // 处理第一位
  let c = 0;
  c = Math.floor(res[0] / 10);
  res[0] %= 10;
  if(c) {
    res.unshift(c);
  }

  return res;
};
// @lc code=end

console.log(plusOne([9,9]));