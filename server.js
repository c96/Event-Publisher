const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: 'testvalue' }));

app.get('/aatest', (req, res) => {
  res.send('Hello from App Engine!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;