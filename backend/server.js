const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/error');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/goals', require('./routes/goals'));

app.use(errorHandler);

app.listen(PORT, console.log(`Server started on ${PORT} port`));
