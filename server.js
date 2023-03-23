const express = require('express');
const routes = require('./routes');
// Import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// Sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

// Please, reference the README.md for further insight
// Thank you for viewing!
// Thomas Calle 😊