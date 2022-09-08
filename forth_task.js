function sortArr(nums, number) {
  nums.push(number);
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
}
var arr = [4, 3, 1, 6];
var number = +prompt('add a number :');

console.log(sortArr(arr, number));
