const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (Local)
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a schema and model
const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Data = mongoose.model("Data", dataSchema);

// Define a route to store data
app.post("/api/store", async (req, res) => {
  const { name, age } = req.body;
  const newData = new Data({ name, age });

  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (error) {
    res.status(500).json({ error: "Failed to store data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
