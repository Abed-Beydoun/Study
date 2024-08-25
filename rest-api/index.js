const express = require('express');
const app = express();
const morgan = require('morgan');
const authorize = require('./utils/authorize');
const warehouseRouter = require('./routers/warehouse.routes');
// Why body-parser is used?
// body-parser is used to parse the incoming request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', authorize);

app.use('/warehouse', warehouseRouter);

app.get('*', (req, res) => {
  res.send('404 Page Not Found');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
