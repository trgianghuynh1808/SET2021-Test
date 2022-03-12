const express = require("express");
const fs = require("fs");
const path = require("path");

// create express application
const app = express();
const PORT = 3000;

// serve static assets
app.get(
  /\.(js|css|map|ico)$/,
  express.static(path.resolve(__dirname, "../dist"))
);

// for any other requests, send `index.html` as a response
app.use("*", (req, res) => {
  // read `index.html` file
  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../dist/index.html"),
    {
      encoding: "utf8",
    }
  );

  // set header and status
  res.contentType("text/html");
  res.status(200);

  return res.send(indexHTML);
});

app.listen(`${PORT}`, () => {
  console.log(`Express server started at http://localhost:${PORT}`);
});
