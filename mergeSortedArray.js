
//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n


const merge = (nums1, m, nums2, n) => {

    // Assign the last element of both arrays to a pointer
    let p1 = m - 1;
    let p2 = n - 1;
    let pMerge = m + n - 1 // Last position in merged array

    // Compare the last elements from both arrays
    // Put the larger element in the merged position
    while (p1 >= 0 && p2 >= 0){
        if(nums1[p1] > nums2[p2]){
            nums1[pMerge] = nums1[p1];
            p1--; 
        }
        else{
            nums1[pMerge] = nums2[p2];
            p2--;
        }
        pMerge--;
    }

    // Copy remaining elements from nums2 to nums1
    while (p2 >= 0){
        nums1[pMerge] = nums2[p2];
        p2--;
        pMerge--;
    }

}