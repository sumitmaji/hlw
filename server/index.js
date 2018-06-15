const express = require('express');
const app = express()

app.get('/hlw', (req, res) => {
  res.send('Hello World')
})

app.get('/healthz', (req, res) => {
  res.send('ok')
})

app.use((err, req, res, next) => {
  res.status(403).send(err);
});

const PORT = process.env.PORT || 5004;
app.listen(PORT);
