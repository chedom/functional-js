function curryN(fn, n) {
  // SOLUTION GOES HERE
  var len = n || fn.length;
  return function bindVar(arg) {
  	if (len <= 1) return fn(arg);
  	return curryN(fn.bind(this, arg), len - 1);
  }
}

module.exports = curryN
