const express = require("express");
let app = express();
app.use("express.json");

app.get("/", function (req, res) {
  res.status(200).send("Ahoj");
});

app.get("/sum", function (req, res) {
  try {
    let a = req.query.a;
    let b = req.query.b;
    console.log(a);
    res.status(200).send(a + b);
  } catch (err) {
    res.status(401).send("Bad request" + err);
  }
});


app.post("/recept", function (req, res) {
    try {
        let topic = req.body.topic;
        let desc = req.query.b;
        console.log(a);
        res.status(200).send(a + b);
      } catch (err) {
        res.status(401).send("Bad request" + err);
      }
})

app.listen(8080);
