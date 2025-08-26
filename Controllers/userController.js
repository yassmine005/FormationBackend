var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");

require("dotenv").config();
const { connectToMongoDb } = require("./config/db");

// Import routes
var indexRouter = require("./routes/userRoutes"); // utilisateur
var osRouter = require("./routes/osRoutes"); // infos système

// Création instance express
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/users", indexRouter);
app.use("/api/os", osRouter);

// catch 404
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({ error: err.message });
});

// Démarrage serveur
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  connectToMongoDb();
  console.log("🚀 Server running on port", PORT);
});
