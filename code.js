module.exports = {
  answers: [
    `class Solution {
            public int[] twoSum(int[] nums, int target) {
                int n =nums.length;
                for(int i=0;i<n;i++){
                     for(int j=i+1;j<n;j++){
                         int c=target-nums[i];
                         if(nums[j]==c){
                             return new int[]{i,j};
                         }
                     }
                }
               throw new IllegalArgumentException("no match found");
                
            }
        }`,
  ],
};
