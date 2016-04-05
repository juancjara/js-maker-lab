// filter nos permite filtrar un arreglo y obtener un arreglo de menor tamanho
// o vacio en caso que ningun valor cumpla con la condicion

var a = [1, 2, 3, 4, 5];

// filtrar los elementos menores a 4 en un nuevo arreglo

//forma clasica
var b = [];
for (var i = 0, len = a.length; i < len; i++) {
	if (a[i] < 4) {
		b.push(a[i])
	}
}
console.log(b);

console.log('usando filter');
//la funcion recibe como parametro un elemento y si la condicion devuelve true
// el elemento se retorna sino se rechaza

var c = a.filter(function(e) {
	return e < 4;
});
console.log(c);


// con colecciones

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

//obtener usuarios menores de edad
var menoresDeEdad = users.filter(function (user) {
  return user.age < 18;
});

console.log(menoresDeEdad);

//otra documentacion
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 