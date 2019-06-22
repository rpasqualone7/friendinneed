const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/friendinneed"
);
const postSeed = [
	{
	  thread: ObjectId,
	  post: "Hey there! Welcome to the first thread of the forum!",
	  date: new Date(Date.now()),
	  user: ""
	},
];

db.Post
//   .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
