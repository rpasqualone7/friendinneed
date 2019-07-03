const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require ("./routes")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://rpasqualone:snowdog7@ds251287.mlab.com:51287/heroku_18f6n02x";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);


// Define API routes here
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/friendinneed");

app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
