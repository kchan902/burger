var orm = require('../config/orm.js');

var burgermodel = {
	all: function (cb) {     
		orm.all('burgers', function (res) {
			cb(res);
			console.log("orm model ALL is working")
		});
	},
	// cols and vals are arrays
	create: function (column, values, cb) {
		orm.create('burgers',column,values, function (res) {
			cb(res);
			console.log("orm model CREATE is working")
		});
	},
	update: function (column, newValue, condition, cb) {
		orm.update('burgers', column, newValue, condition, function (res) {
			cb(res);
			console.log("orm model UPDATE is working")
		});
	},
	delete: function (condition, cb) {
		console.log("workings??")
		orm.delete('burgers',condition, function (res) {
			console.log("workings11111??")
			cb(res);
			console.log("orm model DELELTE is working")
		});
	}
};

module.exports = burgermodel;