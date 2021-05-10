const router = require("./src/app/index");
const db = require("./src/db/db.config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const server = express();
const port = 8000;
server.use(express.json());
server.use(cors());
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
server.all('*', function(req, res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
});
server.listen(port, () =>{
   console.log(`Connected at port ${port}`)
});