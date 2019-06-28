const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const signUpSchema = new Schema({
 Thread: ObjectId,
 email: {type: String, required: true},	
 password: {type: String, required: true},
 firstName: {type: String, required: true},
 lastName: {type: String, required: true}
});

const Thread = mongoose.model("signUp", signUpSchema);

module.exports = signUp;