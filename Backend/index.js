require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;

const DB_URI = process.env.DB_URI;
mongoose
.connect(`${DB_URI}`)
.then(()=> {console.log("Connected to DB at", DB_URI)})
.catch((e)=> {console.log("Failed to connect to DB", e)})

app.use(express.json())


app.listen(PORT, () => {
  console.log(`Started to listen on PORT: ${PORT}`);
});
