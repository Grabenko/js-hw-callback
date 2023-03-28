function transformObj(obj, callback) {
  const newObj = {
    name: obj.name.toUpperCase(),
    age: obj.age + 5
  };
  callback(newObj);
}
const obj = [
  { name: 'Nik', age: 23 },
  { name: 'Oleg', age: 35 },
  { name: 'Olga', age: 21 },
  { name: 'Roma', age: 48 },
  { name: 'Pasha😉', age: 30 },
];

transformObj(obj[0], function(newObj) {
  console.log(newObj);
});

