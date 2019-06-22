const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ThreadSchema = new Schema({
 thread: ObjectId,
 body: {type: String, required: true},	
 title: {type: String, required: true},
 date: {type: Date, default: Date.now},
 user: {type: String, default: 'Anon'}
});

const Thread = mongoose.model("Thread", ThreadSchema);

module.exports = Thread;
