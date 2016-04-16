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
      street: 'Av huehue',
      country: 'Brasil'
    },
    basicData: {
      name: 'ronaldhino',
      lastName: 'gaucho',
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

// var country = 'Brasil';
// var onlyOneCountry = function (u, pais) {
//   return u.address.country === pais;
// };


// var brasileros = users.filter(onlyOneCountry);

// console.log(brasileros);


//partials 

// var gg = function (a) {
//   return function(b) {
//     return b + a;
//   };
// };

// var var1 = gg(1);
// // var var2 = var1(5);

// console.log(var1);

// console.log(var2);


// var onlyOneCountry = function (pais) {
//   return function (user) {
//     return user.address.country === pais;
//   };
// };

// var country = 'Brasil';
// var onlyBrasil = onlyOneCountry(country);
// console.log('asf');
// console.log(onlyBrasil);
// var onlyPeru = onlyOneCountry('Peru');


// var brasileros = users.filter(onlyBrasil);

// var fn = function() {
//   console.log(arguments);
// };

// console.log(fn(13,4,5,5,5,5));



// var log = function(a) {
//   console.log(a)
// };

// var fn2 = function(fnLog, b) {
//   fnLog(b);
// };

// fn2(log, '123');


// var fn3 = function (fnLog, a, b) {
//   var c = a + b;
//   fnLog(c);
// }

// fn3(log, 23, 4);



// partial

// var argsToArray = function(args) {
//   return args = Array.prototype.slice.call(args);
// };

// var partial = function(fn) {
//   var pastArgs = argsToArray(arguments).slice(1);
//   return function() {
//     var newArgs = argsToArray(arguments);
//     return fn.apply(null, pastArgs.concat(newArgs));
//   };
// };

// var onlyOneCountry = function (pais, user) {
//   return user.address.country === pais;
// };
// console.log('partial');
// var brasileros = users.filter(partial(onlyOneCountry, 'Peru'));
// console.log(brasileros);



















































