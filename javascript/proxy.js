let p = new Proxy({ a: 1 }, {
	get(target, name) {
		return name in target ? target[name] : 6;
	}
});
console.log(p.a);
console.log(p.b);
console.log(p.c);


//
let validator = {
	set: function (obj, prop, value) {
		if (prop === 'age') {
			if (!Number.isInteger(value)) {
				throw new TypeError('The age is not an integer');
			}
			if (value > 200) {
				throw new RangeError('The age seems invalid');
			}
		}
		// The default behavior to store the value
		obj[prop] = value;
		// 表示成功
		return true;
	}
};
let person = new Proxy({}, validator);
person.age = 100;
console.log(person.age);
person.age = 'young';
person.age = 300;