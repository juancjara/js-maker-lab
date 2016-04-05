// foreach es equivalente a un for

var a = [1,2,3,4]
//imprimir cada elemento

//forma clasica
for (var i = 0, len = a.length; i < len; i++) {
  console.log(a[i]);
}

console.log('usando foreach');

a.forEach(function(elem) {
  console.log(elem);
})

// la legibilidad gana en un foreach, xq se puede extrar la funcion 
// en una variable y hacer el codigo mas entendible

var imprimir = function(e) {
  console.log(e);
}

a.forEach(imprimir);

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

users.forEach(function(user) {
  console.log(user.name);
});

//otra documentacion 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach