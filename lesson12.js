function Spy(target, method) {
  // SOLUTION GOES HERE
  var func = target[method];
  this.count = 0;
  var self = this;
  target[method] = function() {
      self.count = self.count + 1;
      func.apply(target, Array.prototype.slice(arguments));
  }
  return this;
}

module.exports = Spy
