const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

  const genres = require('./spotifyAPI')(req, res);

  const precentGenre = require('./getDataAsPercent')(genres)

  
  
app.get('/spotify-auth', (req, res) => {
  require('./spotifyAPI')(req, res);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})