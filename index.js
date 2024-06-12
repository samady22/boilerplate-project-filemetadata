import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
// require("dotenv").config();
import fileUploadRouter from "./routes/fileUploadRouter.js";
dotenv.config();
var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", fileUploadRouter);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
