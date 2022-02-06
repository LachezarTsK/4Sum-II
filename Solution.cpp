
#include<unordered_map>
#include<vector>
using namespace std;

class K_sumCount {
    
public:

    unordered_map<int, int> mapSumToFrequency;
    int targetSum = 0;

    int calculate_K_sumCount(const vector<vector<int>>&listVectors, int targetSum) {
        
        this->targetSum = targetSum;
        sumFirstHalf(listVectors, 0, 0);
        return complementSumSecondHalf(listVectors, listVectors.size() / 2, 0);
    }

    void sumFirstHalf(const vector<vector<int>>&listVectors, int index, int sum) {

        if (index == listVectors.size() / 2) {
            mapSumToFrequency[sum]++;
        } else {
            for (const auto& num : listVectors[index]) {
                sumFirstHalf(listVectors, index + 1, sum + num);
            }
        }
    }

    int complementSumSecondHalf(const vector<vector<int>>&listVectors, int index, int complement) {

        if (index == listVectors.size()) {
            return mapSumToFrequency[targetSum - complement];
        }

        int counter = 0;
        for (const auto& num : listVectors[index]) {
            counter += complementSumSecondHalf(listVectors, index + 1, complement + num);
        }
        return counter;
    }
};


class Solution {
    
public:

    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {

        vector<vector<int>> listVectors {nums1, nums2, nums3, nums4};
        int targetSum = 0;
        K_sumCount kSumCount;
        
        return kSumCount.calculate_K_sumCount(listVectors, targetSum);
    }
};
