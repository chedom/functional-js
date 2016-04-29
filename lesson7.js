function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  return (function reduceRec(index, init) {
      if (index > arr.length - 1) return init;
      return reduceRec(index + 1, fn(init, arr[index], index, arr));
  })(0, initial);
}

module.exports = reduce
