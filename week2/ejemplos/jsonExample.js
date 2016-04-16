// un json es un objeto en js como casi todo
//javascript object notation

//ejemplos

var a = {
  foo: 5
};

// var attr = 'foo';
// console.log('here', a[attr]);

//para acceder a los propiedad podemos hacerlo de 2 formas

console.log(a.foo);
console.log(a['foo']);

//objeto mas complejo

var b = {
	foo: {
    bar: 10
  }
};

console.log(b.foo.bar);

// un arreglo sigue siendo un objeto, y de igual forma un json valido

var users = [
  {
    address: {
      street: 'Av La marina',
      country: 'Peru'
    },
    basicData: {
      name: 'pedro',
      lastName: 'ramirez',
    }
  },
  {
    address: {
      street: 'Av La Bolivar',
      country: 'Peru'
    },
    basicData: {
      name: 'irina',
      lastName: 'caro',
    }
  }
];

console.log(users);
console.log(users[0].address.country); // Peru
console.log(users[1].basicData.name); // irina

// si quieren imprimir los nombres de todos los usuarios

for (var i = 0, len = users.length; i < len ; i++) {
  console.log(users[i].basicData.name);
}

// console.log('/');
// users.forEach(function (user) {
//   console.log(user.basicData.name);
// });

