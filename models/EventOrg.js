var mongoose = require('mongoose');

var EventOrgSchema = new mongoose.Schema({
	name: {type: String, default: ''},
	bio: {type: String, default: ''},
	image: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('eventorgs', EventOrgSchema)