// map sirve para transformar valores de un arreglo
// esta funcion te devuelve un nuevo arreglo de la
// misma longitud

var a = [1,2,3,4];

// duplicar cada elemento y generar un nuevo arreglo

//forma clasica

var b = [];
for (var i = 0, len = a.length; i < len; i++) {
  b.push(a[i] * 2);
}
console.log(b); // [2, 4, 6, 8];

console.log('usando map');
//map recibe como parametro el elemento,
var c = a.map(function(elem) {
  return elem * 2;
});

console.log(c); // [2, 4, 6, 8];

// se prefiera usar map xq es mas legible ya que la funcion
// se puede definir aparte

var duplicate = function(elem) {
  return elem * 2;
};

var d = a.map(duplicate);
console.log(d); // [2, 4, 6, 8];

//se puede aplicar sobre colecciones (arreglo de objetos))
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
//extraer las edades de los usuarios
var ages = users.map(function(elem) {
  return elem.age;
});

console.log(ages); // [20, 10]

//otra documentacion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map