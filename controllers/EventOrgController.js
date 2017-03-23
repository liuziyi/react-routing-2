var EventOrg = require('../models/EventOrg');
var Promise = require('bluebird');

module.exports = {

	get: function(params){
		return new Promise(function(resolve,reject){
			EventOrg.find(params, function(err,eventorgs){
				if(err){
					reject(err)
					return
				}
				resolve(eventorgs)
			})
		})
	},
	getById: function(id){
		return new Promise(function(resolve,reject){
			EventOrg.findById(params, function(err,eventorg){
				if(err){
					reject(err)
					return
				}
				resolve(eventorg)
			})
		})
	},
	post: function(params){
		return new Promise(function(resolve,reject){
			EventOrg.create(params, function(err,eventorgs){
				if(err){
					reject(err)
					return
				}
				resolve(eventorgs)
			})
		})
	}

}