// Request to post question
exports.postQuestion = function (req, res, app) {
	res.end('Post Questin');
}

// Request to vote on question
exports.voteQuestion = function(req, res, app) {
	res.end('Vote Question');
}

// Request to get questions to vote
exports.getQuestion = function(req, res, app) {
	res.end('Get Question');
}