const http = require("http");
const express = require("express");
const app = express();
const mysql = require("mysql");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/images", express.static(__dirname + "/images"));

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kontak",
});

conn.connect();

var data = [
  {
    image: "black-panther.jpg",
    width: "100%",
    height: 1,
  },
  {
    image: "endgame.jpg",
    width: "100%",
    height: 1,
  },
  {
    image: "spiderman.jpg",
    width: "100%",
    height: 1,
  },
];

app.get("/data", (req, res) => {
  res.json(data);
});

app.get("/kontak", (req, res) => {
  conn.query("SELECT * FROM tbl_kontak", (err, rows) => {
    res.json(rows);
  });
});

app.post("/kontak", (req, res) => {
  // const nama_depan = req.body.nama_depan;
  // const nama_belakang = req.body.nama_belakang;
  // const email = req.body.email;
  // const nomor_hp = req.body.nomor_hp;
  console.log(req.body);

  var data = {
    nama_depan: req.body.nama_depan,
    nama_belakang: req.body.nama_belakang,
    email: req.body.email,
    nomor_hp: req.body.nomor_hp,
  };

  var query = "INSERT INTO tbl_kontak SET ?";

  conn.query(query, data, (err, result) => {
    res.json(result);
  });
});

const server = http.createServer(app);
server.listen(8000, () => {
  console.log("Connect with port 8000");
});
