 function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return function() {
      return repeat(operation, --num)
    }
    
  }
  
  function trampoline(fn) {
    while(fn && typeof(fn) === 'function') {
      var fn = fn(); 
    }
    return fn;

  }
  
  module.exports = function(operation, num) {
    return trampoline(repeat(operation, num))
  }
