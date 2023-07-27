/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     if (n === 0 || n === 1) {
    return 1; // There's only one way to reach step 0 or 1 (by not climbing any step)
  }

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // Base case: there's one way to reach step 0
  dp[1] = 1; // Base case: there's one way to reach step 1

  for (let i = 2; i <= n; i++) {
    // The number of ways to reach step i is the sum of the ways to reach step i-1 and step i-2
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
