var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

// Establish database connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const mongoDB = process.env.MONGO_KEY;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Import routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const greysRouter = require("./routes/greysAnatomy");
const privatePracticeRouter = require("./routes/privatePractice");
const station19Router = require("./routes/station19");
const allShowsRouter = require("./routes/allShows");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", allShowsRouter);
app.use("/api/greys-anatomy", greysRouter);
app.use("/api/private-practice", privatePracticeRouter);
app.use("/api/station-19", station19Router);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Middleware to set CORS headers to allow requests from any origin.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
