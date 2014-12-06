var worque = require('worque');

function Adapter (config) {
	this.client = new worque.Client(config);
	this.aliases = {};
}

Adapter.prototype.subscribe = function (name, concurrency, hander) {
	return this.client.subscribe(this.aliases[name] || name, concurrency, hander);
};

Adapter.prototype.publish = function (name, message) {
	return this.client.publish(this.aliases[name] || name, message);
};

Adapter.prototype.rename = function (original, alias) {
	this.aliases[original] = alias;
};

module.exports = function build (config) {
	return new Adapter(config);
};
