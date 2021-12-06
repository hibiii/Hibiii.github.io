class Transformer {
	constructor(meta, transform) {
		this.meta = meta;
		this.transform = transform;
	}
}

transformers = [
	new Transformer({description: "strip vowels", toggle: "novowels"}, function(input) {
		return input.replace(/[aeiou]/gi, '');
	})
]