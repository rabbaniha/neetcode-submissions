class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const setNums = new Set();
        for(const num of nums){
            setNums.add(num);
        }

        return setNums.size !== nums.length;
    }
}
