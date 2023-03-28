function filterArray(arr, callback){
    const filteredArray = arr.filter(num=>num)
    filteredArray.forEach(num => {
        callback(num+1)
    });
}
function callback2(result){
    console.log(result);
}
const arr = [23, 33, 12, 45, 1]; //[24,34,13,46,2]

filterArray(arr, callback2)


