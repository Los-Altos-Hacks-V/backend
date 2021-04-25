const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res) =>{
    res.send('Welcome to the Altego API')
})
app.get('/friends', (req, res) => {
  res.send('HI this is the friends endpt')
  // require('./getFriends')(req, res);
})

app.get('/spotify-auth', (req, res) => {
  res.send('HI this is the auth endpt')

   require('./src/spotifyAPI')(req, res);

  // const genres = {
  //     'rock': 5,
  //     'rap': 4,
  //     'indie': 100
  // }
  //
  // const percentGenres = require('./src/getDataAsPercent')(genres);

//   require('./getFriends')(req, res);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})