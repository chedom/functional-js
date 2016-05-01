function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  var acc = {};
  (function recurse(obj) {
  	if (typeof(obj) === 'object') {
  		for (key in obj) {
	  		if (key === 'dependencies') {
	  			for (k in obj[key]) {
	  				var uniqKey = [k, obj[key][k].version].join('@');
	  				acc[uniqKey] = uniqKey;
	  			}
	  			recurse(obj[key]);
	  		}
	  		recurse(obj[key]);
  		}
  	}
  	
  })(tree)
  return Object.keys(acc).sort();
}

module.exports = getDependencies
