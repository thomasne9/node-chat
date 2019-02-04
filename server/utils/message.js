const moment = require('moment');

var generateMessage = (from, text) => {
	return {from, text, CreatedAt: moment().valueOf()};	
};

var generateLocationMessage = (from, latitiude, longitude) => {
	return {
		from, 
		url: `https://www.google.com/maps?q=${latitiude},${longitude}`, 
		CreatedAt: moment().valueOf()
	};	
};

module.exports = {generateMessage, generateLocationMessage};