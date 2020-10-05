const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	console.log("here");
    res.json({"message": "Welcome to Exercise Tracker API"});
	
});

app.use('/exercises', require('./routes/exercises'));
app.use('/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
