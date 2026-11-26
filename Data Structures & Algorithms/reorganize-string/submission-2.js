class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        let freq = new Array(26).fill(0);
        for (let char of s) {
            freq[char.charCodeAt() - 97]++;
        }
        let maxFreq = 0;
        let maxChar = 0;
        for (let i = 0; i < 26; i++) {
            if (freq[i] > maxFreq) {
                maxFreq = freq[i];
                maxChar = i;
            }
        }
        let result = [];
        let index = 0;
        if (maxFreq > Math.ceil(s.length / 2)) return "";

        while (freq[maxChar] > 0) {
            result[index] = String.fromCharCode(maxChar + 97);
            index += 2;
            freq[maxChar]--;
        }

        for (let i = 0; i < 26; i++) {
            while (freq[i] > 0) {
                if (index >= s.length) index = 1;
            result[index] = String.fromCharCode(i + 97);
            index += 2;
            freq[i]--;
            }
        }
        return result.join('');
    }
}
