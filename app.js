const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
require('dotenv').config();

// Connexion à la base de données
const { connectToMongoDb } = require('./config/db');

// Import des routers
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');
const osRouter = require('./routes/osRouter');
const deliveryRouter = require('./routes/deliveryRouter');
const medicationRouter = require('./routes/medicationRouter');
const notificationRouter = require('./routes/notificationRouter');
const orderRouter = require('./routes/orderRouter');
const stockRouter = require('./routes/stockRouter');
const pharmacyRouter = require('./routes/pharmacyRouter');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Définition des routes
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/os', osRouter);
app.use('/order', orderRouter);
app.use('/stock', stockRouter);
app.use('/pharmacy', pharmacyRouter);
app.use('/medication', medicationRouter);
app.use('/notification', notificationRouter);
app.use('/delivery', deliveryRouter);

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Gestionnaire global d'erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

// Connexion DB et lancement serveur
const PORT = process.env.PORT || 5002;
connectToMongoDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur de connexion à la DB:', err);
  });

module.exports = app;
