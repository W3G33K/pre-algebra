class Enumerable {
	static names() {
		let enumerable = this;
		return Object.getOwnPropertyNames(enumerable)
			.filter(function(name) {
				let descriptor = Object.getOwnPropertyDescriptor(enumerable, name);
				return (typeof descriptor.get === "function");
			});
	}

	static values() {
		let enumerable = this,
			names = enumerable.names();
		return names.map(name => enumerable[name]);
	}
}

module.exports = Enumerable;
