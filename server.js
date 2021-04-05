const router = require("./src/app/index");
const db = require("./src/db/db.config");
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = 8000;
server.use(express.json());
mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false}).
then(() =>{
      console.log("successfully connected");
}).catch((e) =>{
   console.log("Connection error", e);
});
server.use(router);
server.listen(port, () =>{
   console.log(`Connected at port ${port}`)
});