const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) =>{
    res.send('Welcome to the Altego API, ps Henry is cool')
})

app.get('/friends', (req, res) => {

  const genres = require('./src/spotifyAPI')(req, res);
  const percentGenres = require('./src/getDataAsPercent')(genres);
})

app.get('/spotify-auth', (req, res) => {
  require('./src/spotifyAPI')(req, res);
  require('./getFriends')(req, res);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})