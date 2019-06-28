const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/friendinneed"
);
const signInSeed = [
	{
    thread: ObjectId,
    title: "Welcome",
    body: "You are signed in!",
	  date: new Date(Date.now()),
	  user: ""
	},
];

db.SignIn
  // .remove({})
  .then(() => db.SignIn.collection.insertMany(signInSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
