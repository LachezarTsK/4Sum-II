
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {

    const listArrays = [nums1, nums2, nums3, nums4];
    const targetSum = 0;
    const kSumCount = new K_sumCount();

    return kSumCount.calculate_K_sumCount(listArrays, targetSum);
};

class K_sumCount {

    constructor() {
        this.targetSum = 0;
        this.mapSumToFrequency = new Map();
    }

    /**
     * @param {number[][]} listArrays
     * @param {number} targetSum
     * @return {number}
     */
    calculate_K_sumCount(listArrays, targetSum) {
        this.targetSum = targetSum;
        this.sumFirstHalf(listArrays, 0, 0);
        return this.complementSumSecondHalf(listArrays, listArrays.length / 2, 0);
    }

    /**
     * @param {number[][]} listArrays 
     * @param {number} index
     * @param {number} sum
     */
    sumFirstHalf(listArrays, index, sum) {

        if (index === listArrays.length / 2) {
            let frequency = this.mapSumToFrequency.has(sum) ? this.mapSumToFrequency.get(sum) + 1 : 1;
            this.mapSumToFrequency.set(sum, frequency);
        } else {
            for (let num of listArrays[index]) {
                this.sumFirstHalf(listArrays, index + 1, sum + num);
            }
        }
    }

    /**
     * @param {number[][]} listArrays 
     * @param {number} index
     * @param {number} complement
     * @return {number}
     */
    complementSumSecondHalf(listArrays, index, complement) {

        if (index === listArrays.length) {
            let sum = this.targetSum - complement;
            let frequency = this.mapSumToFrequency.has(sum) ? this.mapSumToFrequency.get(sum) : 0;
            return frequency;
        }

        let counter = 0;
        for (let num of listArrays[index]) {
            counter += this.complementSumSecondHalf(listArrays, index + 1, complement + num);
        }
        return counter;
    }
}
