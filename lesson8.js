function duckCount() {
  // SOLUTION GOES HERE
  return Array.prototype.filter.call(arguments, function(duck) {
      return Object.prototype.hasOwnProperty.call(duck, 'quack');
  }).length;
}

module.exports = duckCount
