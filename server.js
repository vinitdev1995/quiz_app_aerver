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
    let responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

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