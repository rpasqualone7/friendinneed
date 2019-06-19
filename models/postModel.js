const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postSchema = new Schema ({
	thread: ObjectId,
	post: { type: String, required: true},
	date: { type: Date, default: Date.now },
	user: { type: String, default: 'Anon'}
});

const Post= mongoose.model("Post", postSchema);

module.exports = Post;