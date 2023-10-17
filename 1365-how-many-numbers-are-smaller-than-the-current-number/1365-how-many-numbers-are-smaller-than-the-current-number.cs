public class Solution {
    public int[] SmallerNumbersThanCurrent(int[] nums) {
        int[] answer = new int[nums.Length];
        int length = 0;
        
        foreach(int num in nums) {
            int smallers = CountSmallers(num, nums, length);
            answer[length++] = smallers;
        }

        return answer;
    }

    public int CountSmallers(int num, int[] arr, int start) {
        int count = 0;
        for(int i = 0; i < arr.Length; i++) {
            if(arr[i] < num) {
                count++;
            }
        }

        return count;
    }
}