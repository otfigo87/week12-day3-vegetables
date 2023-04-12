require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
//!Data
const Vegetable = require("./models/Vegetable")

const app = express();
const port = 3000;

//config for engine/views
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//Middleware
//parses the data from the request
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});
// !Get vegetables list
app.get("/vegetables", (req, res) => {
  Vegetable.find((error, allVegetables) => {
    res.render("Index", {vegetables: allVegetables})
  })
});
//!to return a form to create new vegetable
app.get("/vegetables/new", (req, res) => {
  res.render("New");
});
// !Post
app.post("/vegetables", (req, res) => {
  if(req.body.readyToEat === "on"){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  // vegetables.push(req.body);
  Vegetable.create(req.body, (error, createdVegetable) => {
    // res.send(createdVegetable);
    res.redirect("/vegetables")
  })
});
// !Get one item
app.get("/vegetables/:id", (req, res) => {
    Vegetable.findById(req.params.id, (err, vegetableById) => {
      if (!vegetableById) {res.send("Sorry No Vegetable under that ID")}
      res.render("Show", { vegetable: vegetableById });
    })
});
//!if none of the routes matches the request
app.get("*", (req, res) => {
  res.render("NotFound");
});




app.listen(port, (req, res) => {
  console.log(`Server listening on ${port}`);
  mongoose.set("strictQuery", true); // get rid of the warning
  // connect to mongoDB
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => console.log("connected to MongoDB"));
});