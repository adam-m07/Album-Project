const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Album Ranker server is working!");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});