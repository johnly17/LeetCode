public class Solution {
    public int NumJewelsInStones(string jewels, string stones) {
        int result = 0;
        
        foreach (char jewel in jewels)
        {
            foreach (char stone in stones)
            {
                if (jewel == stone)
                {
                    result++;
                }
            }
        }
        return result;
    }
}