function SortArrays(arr1, arr2, callback) {
  const arr3 = arr1.concat(arr2);
  const sortedArr = arr3.sort((a, b) => a - b);
  callback(sortedArr);
}
function callback2(sortedArr) {
  console.log(sortedArr);
}
const arr1 = [23, 3, 12, 4, 1];
const arr2 = [26, 17, 10, 9, 19];

SortArrays(arr1, arr2, callback2 );
