var mongoose = require('mongoose');
var NestedSetPlugin = require('mongoose-nested-set');

var categorySchema = new mongoose.Schema({
	name: { type: String, required: true}
});
//console.log(NestedSetPlugin);
categorySchema.plugin(NestedSetPlugin);

module.exports = categorySchema;