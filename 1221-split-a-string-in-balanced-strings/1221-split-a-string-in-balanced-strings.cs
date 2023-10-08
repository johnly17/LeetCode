public class Solution {
    public int BalancedStringSplit(string s) {
        int cnt = 0,lCount = 0,rCount = 0;
        
        for(int i = 0; i < s.Length;i++){
            if(s[i] == 'R') rCount++;
            else lCount++;
            if(lCount == rCount) cnt++;
        }
        
        return cnt;
    }
}