var toNumber = function (n) {
  return +n || 0;
}

var formatCurrency = function (n, decimals) {
  return 'S/. ' + toNumber(n).toFixed(2); 
};

//not the most efficient way
var findByKey = function (array, key, value) {
  return array.filter(function (a) {
    return a[key] === value;
  })[0]
};

var println = function() {
  var args = Array.prototype.slice.call(arguments);
  document.write(args.join(' '), '<br>');
}
