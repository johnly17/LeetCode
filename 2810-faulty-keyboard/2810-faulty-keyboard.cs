public class Solution {
    public string FinalString(string s) {
        string result = "";
        foreach(var letter in s) {
            if(letter == 'i') {
                string reversedString = new string(result.ToCharArray().Reverse().ToArray());
                result = reversedString;
            }
            else {
                result += letter;
            }
        }
        return result;
    }
}