const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const axios = require('axios');


const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(express.static("public"));
// app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}`);
});
