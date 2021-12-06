class Transformer {
	constructor(meta, transform) {
		this.meta = meta;
		this.transform = transform;
	}
}

transformers = [
	new Transformer({description: "strip vowels", toggle: "novowels"}, function(input) {
		return input.replace(/[aeiou]/gi, '');
	}),
	new Transformer({description: "a for x", toggle: "atox"}, function(input) {
		return input.replace(/a/gi, 'x');
	}),
	new Transformer({description: "a for q", toggle: "atoq"}, function(input) {
		return input.replace(/a/gi, 'q');
	}),
	new Transformer({description: "e for x", toggle: "etox"}, function(input) {
		return input.replace(/e/gi, 'x');
	}),
	new Transformer({description: "e for c", toggle: "etoc"}, function(input) {
		return input.replace(/e/gi, 'c');
	}),
	new Transformer({description: "i for j", toggle: "itoj"}, function(input) {
		return input.replace(/i/gi, 'j');
	}),
	new Transformer({description: "i for x", toggle: "itox"}, function(input) {
		return input.replace(/i/gi, 'x');
	}),
	new Transformer({description: "o for x", toggle: "otox"}, function(input) {
		return input.replace(/o/gi, 'x');
	}),
	new Transformer({description: "o for c", toggle: "otoc"}, function(input) {
		return input.replace(/o/gi, 'c');
	}),
	new Transformer({description: "u for x", toggle: "utox"}, function(input) {
		return input.replace(/u/gi, 'x');
	}),
	new Transformer({description: "u for v", toggle: "utov"}, function(input) {
		return input.replace(/u/gi, 'v');
	})
]