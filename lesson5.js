function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(submUser) {
    	return goodUsers.some(function(goodUser) {
    		return goodUser.id === submUser.id;
    	});
    });
  };
}

module.exports = checkUsersValid
