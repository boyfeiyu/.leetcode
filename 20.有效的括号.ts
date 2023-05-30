/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const map = {
    ')':'(',
    '}':'{',
    ']':'[',
  }
  const isLeft = (char: string) => {
    if(char === '(' || char === '[' || char === '{') {
      return true;
    } return false;
  }

  const stack: string[] = [];
  let top = -1;
  for(let i=0; i<s.length; i++) {
    const t = s[i];
    if(isLeft(t)) {
      stack[++top] = t;
    } else {
      if(stack[top] !== map[t]) {
        return false
      }
      top--;
    }
  }
  if(top === -1) {
    return true
  }
  return false
};
// @lc code=end

