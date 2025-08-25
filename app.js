var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const http =require("http")

require("dotenv").config()
const{connectToMongoDb} = require('./config/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(logger('dev')); //bech t5raje al chaque requete detail el koul
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//dossier public

app.use('/', indexRouter);// kifech tousel li index router 
app.use('/users', usersRouter);//kifech tousel el userrouter

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});// ken serveur ta7 

;
const server = http.createServer(app)
server.listen(process.env.Port,()=>{
  connectToMongoDb();
   console.log("app is running on Port", process.env.Port);
  });
