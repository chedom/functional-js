function getDependencies(tree, acc) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  acc = acc || [];
  var dependencies =  tree && tree.dependencies || [];
  Object.keys(dependencies).forEach(function(item) {
  	var uniqKey = [item, tree.dependencies[item].version].join('@');
  	if (acc.indexOf(uniqKey) === -1) acc.push(uniqKey);
  	getDependencies(tree.dependencies[item], acc);
  });
  return acc.sort();
}

module.exports = getDependencies