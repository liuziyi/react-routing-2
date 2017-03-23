var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	title: {type: String, default: ''},
	description: {type: String, default: ''},
	image: {type: String, default: ''},
	category: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('events', EventSchema)