var generateMessage = (from, text) => {
	return {from, text, CreatedAt: new Date().getTime()};	
};

var generateLocationMessage = (from, latitiude, longitude) => {
	return {
		from, 
		url: `https://www.google.com/maps?q=${latitiude},${longitude}`, 
		CreatedAt: new Date().getTime()
	};	
};

module.exports = {generateMessage, generateLocationMessage};