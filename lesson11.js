module.exports = function arrayMap(arr, fn, thisArg) {
  // SOLUTION GOES HERE
  return arr.reduce(function (acc, val, key) {
      acc.push(fn.call(thisArg, val, key, arr));
      return acc;
  }, []);
}
