class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const sortS = s.split("").sort().join("");
        const sortT = t.split("").sort().join("");

        for (let i = 0; i < sortS.length; i++) {
            if (sortS[i] !== sortT[i]) {
                return false;
            }
        }

        return true
    }
}
