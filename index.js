const express = require('express');
const apiroutes = require('./routes/apiroutes')
const htmlroutes = require('./routes/htmlroutes') // if you're creating the path its a file you have access too right away
// Initialize the app and create a port   // if you're writing the word like express thats speicially for notes (texts)
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroutes)
app.use('/', htmlroutes)
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`)); // starter for every index.js








