var Event = require('../models/Event');
var Promise = require('bluebird');

module.exports = {

	get: function(params){
		return new Promise(function(resolve,reject){
			Event.find(params, function(err,events){
				if(err){
					reject(err)
					return
				}
				resolve(events)
			})
		})
	},
	getById: function(id){
		return new Promise(function(resolve,reject){
			Event.findById(params, function(err,event){
				if(err){
					reject(err)
					return
				}
				resolve(event)
			})
		})
	},
	post: function(params){
		return new Promise(function(resolve,reject){
			Event.create(params, function(err,events){
				if(err){
					reject(err)
					return
				}
				resolve(events)
			})
		})
	}

}