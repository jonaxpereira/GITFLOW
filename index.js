const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([
    {
        id: 1,
        name: 'jonaxpereira'
    },
    {
        id: 2,
        name: 'frankjobsmf'
    }
  ]);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});