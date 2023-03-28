function filterArray(arr, filterValue, callback){
    const filteredArray = arr.filter(num=>num>filterValue)
    let sum = 0
    filteredArray.forEach(num => {
      sum += num;
    });
      callback(sum)
    
}
function callback2(result){
    console.log(result);
  }
const arr = [23, 3, 12, 4, 1]; //35
const filterValue = 5
filterArray(arr, filterValue, callback2)
