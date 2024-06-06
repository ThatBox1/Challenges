
//Given an array of integers nums, sort the array in ascending order and return it.

//You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.


const sortArray = (nums) => {
    // Base
    if (nums.length <= 1){
        return 1;
    }
    // Split into two, left and right side of the array
    let mid = Math.floor(nums.length / 2);
    let leftSide = nums.slice(0, mid);
    let rightSide = nums.slice(mid);

    //Merge the two sides after sorting
    return merge(sortArray(leftSide), sortArray(rightSide));
}

const merge = (left, right) => {
    let sortedArr = [];

    //Compare the first value on each side of the array, and push it to sorted arr
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
        }
        else{
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}