const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const ThreadSchema = new Schema({

 threads:[{
 body: {type: String, required: true},	
 title: {type: String, required: true},
 date: {type: Date, default: Date.now},
 user: {type: String, default: 'Anon'}}]
});

const Thread = mongoose.model("Thread", ThreadSchema);

module.exports = Thread;
