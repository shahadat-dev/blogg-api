var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bloggSchema = new mongoose.Schema({
	//category: { type: Schema.Types.ObjectId },
	post: { type: String, required: true},
	comments: { type: Schema.Types.Mixed },
	upvote: { type: Number, default: 0 },
	downvote: { type: Number, default: 0 },
	created_at:{ type: Date, default: Date.now },
	updated_at:{ type: Date, default: null }
});

module.exports = bloggSchema;