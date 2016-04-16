//ejercicio 1

// var inRangeP = function(min, max) {
//   return function(n) {
//     return n >= min && n <=max;
//   }
// }

// var inRangeOneToTen = inRangeP(1, 10);
// console.log('p', inRangeOneToTen(1));

var inRange = function(num, min, max) {
  return num >= min && num <= max;
  // return num >= min && num <= max ? true: false;
};

var aprobado = function(g) {
  return g >= 6;
}
// console.log(inRange(1, 1, 10));
// console.log(inRange(5, 1, 10));
// console.log(inRange(15, 1, 10));

// var gg = function(n1, n2, n3) {
//   var gradesInRange = inRange(n1, 1, 10) && inRange(n2, 1, 10) && inRange(n3, 1, 10);
//   if (gradesInRange) {
//     if (aprobado(n1) && aprobado(n2) && aprobado(n3)) {
//       console.log('aprobo');
//     } else {
//       console.log('reprobo');
//     }
//   } else {
//     console.log('no paso');
//   }
// };

// gg(2, 3, 5);
// gg(7, 8, 9);


// var eje1 = function(grades) {
//   grades.filter(function (g) {
//     return g >= 1 && g <= 10;
//   })
//   .forEach(function (g) {
//     console.log(g >= 6 ? 'Aprobo': 'Desaprobo');
//   });
// };

// var notas = [1, 8, 13];
// eje1(notas);

var eje1 = function(grades) {
  grades
    .forEach(function (g) {
      if (g >= 1 && g <= 10) {
        console.log(g, g >= 6 ? 'Aprobo': 'Desaprobo');
      } else {
        console.log(g, 'no esta en el rango');
      }
    });
};

var notas = [1, 8, 13];
eje1(notas);




