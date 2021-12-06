document.addEventListener('DOMContentLoaded', () => {
	transformers.forEach(tf => {
		let formBreak = document.getElementById("form-break");
		let checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("id", tf.meta.toggle);
		let label = document.createElement("label");
		label.setAttribute("for", tf.meta.toggle);
		label.innerHTML = tf.meta.description;
		formBreak.appendChild(document.createElement("br"));
		formBreak.appendChild(checkbox);
		formBreak.appendChild(label);
	});
})
function generate() {
	let results = document.getElementById("results");
	results.innerHTML = "";
	let input = document.getElementById("ign").value;
	let outputs = [ input ];
	let hasTransforms = true;
	do {
		let oldOutputs = outputs;
		oldOutputs.sort();
		outputs.forEach(ign => {
			transformers.forEach(tf => {
				if(!document.getElementById(tf.meta.toggle).checked) return;
				let tfOutput = tf.transform(ign);
				if(tfOutput === null) return;
				outputs = outputs.concat([tfOutput]).flat();
			});
		});
		outputs = outputs.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
		outputs.sort();
		if(JSON.stringify(oldOutputs) == JSON.stringify(outputs)) hasTransforms = false;
	} while(hasTransforms);
	outputs.forEach(ign => {
		let li = document.createElement("li");
		li.innerText = ign;
		results.append(li);
	})
}
