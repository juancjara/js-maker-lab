// reduce: como el nomnre lo dice, se encarga de reducir un arreglo a un
// solo valor

var a = [1,2,3,4,5];

//obtener la suma del arreglo

//forma clasica

var sum = 0;

for (var i = 0, len = a.length; i < len; i++) {
  sum += a[i];
}
console.log('sum', sum);

console.log('usando reduce');

var sum2 = a.reduce(function(acc, elem) {
  console.log('acumulador: ', acc, 'elemento actual', elem);
  return acc + elem;
}, 0);
console.log('suma', sum2);

//reduce es diferente a las demas funciones vistas(foreach, map, filter)
// porque en su callback recibe 2 parametros, el primero es el acumulador
// que seria equivalente a nuestra variable 'sum' y el segundo es el elemento
// actual del arreglo, pero ademas reduce recibe el valor inicial del acumulador como
// ultima variable en este caso es el valor de 0


//usandolo en coleciones
var users = [
  {
    name: 'pedro',
    age: 20
  },
  {
    name: 'pablo',
    age: 10
  }
];

//sumar las edades de los usuarios

var totalAges = users.reduce(function (acc, user) {
  return acc + user.age;
}, 0);

console.log('totalAges:', totalAges);

//otra explicacion enhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 