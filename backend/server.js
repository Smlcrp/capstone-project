const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const {errorHandler} = require('./middleware/error.middleware');
const connectDB = require('./config/db.config');
const port = process.env.PORT || 5000

connectDB()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/inventory', require('./routes/inventory.routes'));

app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`))