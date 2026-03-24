const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Verify webhook from Meta (WhatsApp)
app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === 'GraceDignity2026Secure') {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

// Receive messages from WhatsApp
app.post('/webhook', (req, res) => {
  console.log('Received WhatsApp message:', req.body);
  res.sendStatus(200);
});

module.exports = app;
