const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const signInSchema = new Schema({
 Thread: ObjectId,
 email: {type: String, required: true},	
 password: {type: String, required: true},
});

const Thread = mongoose.model("signIn", signInSchema);

module.exports = signIn;
