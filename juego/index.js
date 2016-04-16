var a = [1, 2, 3, 4];
// var b;
// for (var i = 0, len = a.length; i < len; i++) {
//   if (a[i]< 3) b.push(a[i])
// }

//map, filter, reduce, foreach, sort

//filter => boolean , true toma el elemento, false obvia el elemento

// var menorQue3 = function(elem) {
//   return elem < 3;
// };

// var b = a.filter(function(elem) {
//   return elem < 3;
// });

// console.log(b);
// var log = function(elem) {
//   console.log(elem);
// };

// a.forEach(log);

// var a = [1,2,3,4];
//cada valor * 2

// var b = a.map(function(elem) {
//   return elem * 2;
// });
// console.log(b);

// var a = [1, 2, 3, 4];
// var sum = 0;
// for (var i = 0, len = a.length; i < len; i ++) {
//   sum += a[i];
// }
// console.log(sum);

// var b = a.reduce(function(acc, elem, i) {
//   console.log(acc, elem, 'indice', i);
//   return acc + elem;
// }, 0);
// console.log(b);
// var a = [1,2,3,4,5];

// var b = a.filter(function(elem, index) {
//   return index % 2 === 0;
// });
// console.log(b);

//doble igual castea tipo, triple igual verifica que tipos sean iguales (valores tb)
// console.log(0 === '0');

// var a = [1,2,3,4];
//elem > 2 , luego * 2 cada elem

// var b = a.filter(function(elem) {
//   return elem > 2;
// }).map(function(elem) {
//   return elem * 2;
// });

// console.log(b);
// var a = [1 , 6, 2, 3];

//devuelve true si se hace el intercambio
// var b = a.sort(function(e1, e2) {
//   return e1 < e2;
// });

// console.log(b);

// var a = [
//   {
//     edad: 14,
//   },
//   {
//     edad: 20,
//   },
//   {
//     edad: 8,
//   },
//   {
//     edad: 30,
//   },
// ];

// var b = a.sort(function (e1, e2) {
//   return e1 < e2;
// });
// console.log(b);

//objetos

// var user = {
//   lastname: 'jara',
//   name: 'juan c'
// };
// console.log(user.name);

// var user = {
//   lastname: 'jara',
//   name: 'juan c',
//   saluda: function() {
//     console.log(this.name);
//     console.log(user.name);
//   }
// };
// user.saluda();

//clases
//atributos : marca y color
// metodos: avanzar, frenar
// carro (marca, color, avanzar, frenar)

//objeto: instancia de una clase
// car1 ('wls', 'amarillo')
// car2 ('toyota', 'rojo')

// this lo hace public, 
// private (var)
// var Carro = function(marca, color) {
//   var marca = marca;
//   this.color = color;

//   this.avanzar = function() {
//     console.log('avanza', marca);
//   }
// };

// var car1 = new Carro('wols', 'amarillo');
// var car2 = new Carro('toyota', 'red');
// car1.avanzar();
// console.log(car1.color);
// car1.avanzar();
// console.log(car2.color);
// car2.avanzar();


// class Carro {
//   private string marca;
//   public string color;
// };

// var car1 = new Carro('wol', 'amarillo');
// car1.marca
// car1.color;

// prototype length
// var cad = 'hola';
// var cad2 = 'hola2';

// console.log(cad.length);
// var Carro = function(marca, color) {
//   this.marca = marca;
//   this.color = color;
// };

// Carro.prototype = {
//   avanzar: function() {
//     console.log('avanza', this.marca);
//   }
// };
// var car1 = new Carro('wols', 'amarillo');
// car1.avanzar();
// var car2 = new Carro('toyota', 'red');
// car2.avanzar();

