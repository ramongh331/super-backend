// dependencies
require("dotenv").config();
const { PORT = 3300, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");


// Register Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//--------------------------------------
// routes
//--------------------------------------

app.get("/", (req, res) => {
    res.send("hello world");
  });

  

// listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));