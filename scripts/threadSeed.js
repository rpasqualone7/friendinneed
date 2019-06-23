const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/friendinneed"
);
const threadSeed = [
	{
    thread: ObjectId,
    title: "First Thread!",
    body: "Hey there! Welcome to the first thread of the forum!",
	  date: new Date(Date.now()),
	  user: ""
	},
];

db.Thread
  // .remove({})
  .then(() => db.Thread.collection.insertMany(threadSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
