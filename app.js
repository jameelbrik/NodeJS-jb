const express = require('express')

const app = express();
const port = 3000;
const host = 'localhost';

const userRoute = require('./routes/users');
const guestsRoute = require('./routes/guests');
const githubRoute = require('./routes/github');

const errorModule = require('./middlewares/error-moduke');
const notFound = require('./middlewares/404-notFound');


app.use('/', guestsRoute);
app.use('/', userRoute);
app.use('/github', githubRoute);

app.use(notFound)
app.use(errorModule)

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
  })