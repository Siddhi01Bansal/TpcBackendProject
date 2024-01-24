// index.js
const cors= require('cors');
const express = require('express');
const connectDB = require('./Config/db');
const bodyParser = require('body-parser');

const { PORT } = require('./Config/serverConfig');
const apiRoutes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});


  


