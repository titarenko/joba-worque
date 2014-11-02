var worque = require('worque');

module.exports = function build (config) {
	return new worque.Client(config);
};
