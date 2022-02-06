
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {

    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {

        List<int[]> listArrays = List.of(nums1, nums2, nums3, nums4);
        int targetSum = 0;
        K_sumCount kSumCount = new K_sumCount();

        return kSumCount.calculate_K_sumCount(listArrays, targetSum);
    }
}

class K_sumCount {

    Map<Integer, Integer> mapSumToFrequency = new HashMap<>();
    int targetSum;

    public int calculate_K_sumCount(List<int[]> listArrays, int targetSum) {

        this.targetSum = targetSum;
        sumFirstHalf(listArrays, 0, 0);
        return complementSumSecondHalf(listArrays, listArrays.size() / 2, 0);
    }

    private void sumFirstHalf(List<int[]> listArrays, int index, int sum) {

        if (index == listArrays.size() / 2) {
            mapSumToFrequency.put(sum, mapSumToFrequency.getOrDefault(sum, 0) + 1);
        } else {
            for (int num : listArrays.get(index)) {
                sumFirstHalf(listArrays, index + 1, sum + num);
            }
        }
    }

    private int complementSumSecondHalf(List<int[]> listArrays, int index, int complement) {

        if (index == listArrays.size()) {
            return mapSumToFrequency.getOrDefault(targetSum - complement, 0);
        }

        int counter = 0;
        for (int num : listArrays.get(index)) {
            counter += complementSumSecondHalf(listArrays, index + 1, complement + num);
        }
        return counter;
    }
}
