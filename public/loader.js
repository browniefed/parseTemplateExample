define(['text!template.mustache'], function(template) {
	debugger;
	console.time('parse');
	var rac = new Ractive({
		el: '',
		template: template,
		data: {}
	});
	console.timeEnd('parse');
});