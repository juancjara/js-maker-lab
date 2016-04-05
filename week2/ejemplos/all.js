// las funciones anteriores como filter y map devuelven arreglos
// entonces se pueden concatenar, usar la output de una para que sea el
// input de la otra

var a = [1,2,3,4,5,6];

//filtrar numeros impares y elevarlos al cuadrado

var b = a
  .filter(function (elem) { 
  	return elem % 2 == 1;//filtrar impares
  })
  .map(function(elem) {
    return elem * elem; //elevar al cuadrado
  });

console.log(b);

//ejemplo con objetos

var customers = [
  {
    active: false,
    name: 'paul',
    savings: 5000, 
  }, {
    active: true,
    name: 'jhon',
    savings: 1000, 
  }, {
    active: false,
    name: 'yoko',
    savings: 2000, 
  }, {
    active: true,
    name: 'ringo',
    savings: 800, 
  },
];

//obtener todos los ahorros (savings) de los clientes activos

var isActive = function(user) {
  return user.active;
}

var sumSavings = function(acc, user) {
  return acc + user.savings;
};

var activeUserSavings = customers
  .filter(isActive)
  .reduce(sumSavings, 0);

console.log('savings', activeUserSavings);