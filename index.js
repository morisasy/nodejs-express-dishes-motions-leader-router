const express = require('express');
const http = require('http');
//const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;
// express instance
const app = express();
// logger
const morgan = require('morgan');

app.use(morgan('dev'));


app.use(express.static(__dirname + '/public'));


// import Router
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leader', leaderRouter);


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});