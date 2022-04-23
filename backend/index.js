const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const generateToken = (data) => {
  return jwt.sign(data, process.env.TOKEN_SECRET);
};

app.post("/login", cors({ origin: "*" }), (req, res) => {
  if (req.body.id && req.body.password) {
    if (
      req.body.id === process.env.LOGIN_EMAIL &&
      req.body.password === process.env.LOGIN_PASSWORD
    ) {
      res.status(200).json({
        status: 200,
        token: generateToken({
          id: req.body.id,
        }),
      });
    } else {
      res.status(401).json({ status: 401, msg: "Incorrect credentials." });
    }
  } else {
    res.status(400).json({ status: 400, msg: "Missing credentials." });
  }
});

app.post("/authenticate", cors({ origin: "*" }), (req, res) => {
  if (req.body.token) {
    jwt.verify(req.body.token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          msg: "Unauthorized.",
        });
      } else {
        res.status(200).json({
          status: 200,
          id: user.id,
        });
      }
    });
  } else {
    res.status(400).json({ status: 400, msg: "Missing token." });
  }
});

app.listen(process.env.BE_PORT, () => {
  console.log(`express server running ${process.env.BE_PORT}`);
});
