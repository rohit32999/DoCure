const express = require('express');
const connectToDB = require('./db/mongoose.js');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
connectToDB()
  .then(() => {
    // Start the server after the database connection is established
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

// Define your routes here
// For example, a simple GET route might look like this:
app.get('/', (req, res) => {
  res.send('Hello, world!');
});