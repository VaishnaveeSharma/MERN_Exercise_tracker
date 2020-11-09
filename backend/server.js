const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configures the dotenv file
require('dotenv').config();

//created server using web-application framework express on th eport 5000
const app = express();
const port = process.env.PORT || 5000;

//used as a middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//importing the .js files in the server file
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//works as a middleware
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});