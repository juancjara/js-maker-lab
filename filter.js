
// var b = [];
// for (var i = 0, len = a.length; i < len; i++) {
// 	if (a[i] <= 2 ) {
// 		b.push(a[i])
// 	}
// }
// var menorQue2 = function (elem, i) {
//   return i % 2 === 0;
// };

// var b = a.filter(menorQue2);
// var a = [1, 2,3, 4];

// filtrar mayor a 2
// elevar al cuadrado
// sumar

// var sumar = function(acc, b) {
//   return acc + b;
// };

// var suma = a.filter(function(elem) {
//     return elem >= 2;
//   })
//   .map(function(elem) {
//     return elem * elem;
//   })
//   .reduce(sumar);
// var suma = a.filter(mayorque2)
//       .map(alCuadrado)
//       .reduce(sumar);

// var json = {
//   usuarios: [
//     { name: 'juan', edad: 25 },
//     { name: 'carlos', edad: 20 }
//   ]
// };
// var usuarios = json.usuarios;

// var b = usuarios.filter(function(usuario) {
//   return usuario.edad > 23;
// });

//sort ejemplo
// var a = [4, 1, 5, 9];

// var b = a.sort(function(valor1, valor2) {
//   return valor1 < valor2;
// });

// var json = {
//   usuarios: [
//     { name: 'juan', edad: 25 },
//     { name: 'carlos', edad: 20 },
//     { name: 'karen', edad: 10 }
//   ]
// };

// var b = json.usuarios.sort(function(u1, u2) {
//   return u1.edad < u2.edad;
// });

// console.log(b);
// == > hace casteo de tipo
// === compara tipo y valor
// console.log(typeof 'asdf');

// var a = 'hello word';

// console.log(a.split());
// console.log(a.split().length);

// var a = [
//   'campo 1 requerido',
//   'campo 2 debe ser numero',
//   'campo 3 debe ser fecha'
// ];
// 'campo 1 requerido#campo 2 requerido'
// console.log(a.reduce(function(acc, error) {
//   return acc + '#' + error;
// }, ''));

// console.log(a.join('#'));






