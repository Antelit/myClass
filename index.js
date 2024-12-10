const express = require('express');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const { init: initSequelize } = require('./db');

const { SERVER_PORT } = process.env;

const app = express();
const server = createServer(app);

app.use(cors({ origin: '*' }));
app.use(bodyParser.json({ limit: '200mb' }));

require('dotenv').config();

initSequelize();

app.use('/', require('./routes/lesson'));

server.listen(SERVER_PORT, () => {
    console.log(`Server Express and Socket.IO listening on *:${SERVER_PORT}`);
});
