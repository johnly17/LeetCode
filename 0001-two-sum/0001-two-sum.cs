public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int ans1 = 0;
        int ans2 = 0;
        
        
        for(int i = 0; i < nums.Length; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                if (nums[i] + nums[j] == target) {
                    ans1 = i;
                    ans2 = j;
                    break;
                }
            }
            
        }
        int[] result = {ans1, ans2};
        
        return result;
    }
}