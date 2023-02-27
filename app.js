const express = require('express');
const app = express();
const ejs = require('ejs');

// Define an array of dates
const dates = [
    'hei ' , 'liker du snakke om din selv ?' , 'når du stå opp ?', 'kan du snakke om live ditt ?',
    'når du liker å kjøpe mat ?', 'er du tenker veldig mye om live og dagen ditt ?', 
    'tenker du på familien din ?'
];

// Define a new route that generates a random date from the array
app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * dates.length);
  const randomDate = dates[randomIndex];
  res.render('index', { randomDate });
});

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
