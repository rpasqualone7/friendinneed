const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
 title: String,
 postdate: {type: Date, default: Date.now},
 user: {type: String, default: 'Anon'}
});

const Thread = mongoose.model("Thread", ThreadSchema);

module.exports = Thread;
