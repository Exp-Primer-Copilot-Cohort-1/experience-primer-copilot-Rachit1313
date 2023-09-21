//Create web server
const express = require('express');
const app = express();
const cors = require('cors');
// Use cors
app.use(cors());
// Use json
app.use(express.json());
// Use urlencoded
app.use(express.urlencoded({ extended: true }));

//Import mongoose
const mongoose = require('mongoose');

//Import model
const Comment = require('./models/Comment');

//Import routes
const commentRoutes = require('./routes/commentRoutes');

//Connect to database
mongoose
  .connect('mongodb://localhost:27017/comments', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log(err);
  });

//Use routes
app.use('/api/comments', commentRoutes);

//Listen to port
app.listen(8000, () => {
  console.log('Server is listening to port 8000');
});