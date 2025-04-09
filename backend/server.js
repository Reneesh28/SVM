const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.redirect("../Signup.html");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../")));
app.get("/Signup", (req, res) => {
  console.log("signup post recevied");
  res.sendFile(path.join(__dirname, "../Signup.html"));
});

app.post("/Signup", (req, res) => {
  console.log("signup post recevied");
  const { username, password } = req.body;
  res.redirect("../home.html");
});
