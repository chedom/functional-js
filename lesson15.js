function loadUsers(userIds, load, done) {
  var results = [];
  userIds.forEach(function(id, key) {
  	load(id, function(res) {
  		results[key] = res;
  		if (key === userIds.length) done(resuts);
  	})
  })
}

module.exports = loadUsers