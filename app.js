const express = require('express')
const app = express()

const router = require('./routes');
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use((req, res) => {
    res.status(404).json({ message: "Not Found!" })
})
app.use(errorHandler);

module.exports = app;
