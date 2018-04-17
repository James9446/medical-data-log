const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/data', function (req, res) {
  console.log('req.body', req.body);
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});