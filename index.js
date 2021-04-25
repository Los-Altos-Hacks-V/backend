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

app.post('/spotify-auth', async (req, res) => {

  let genres = await require('./src/spotifyAPI')(req, res);

  let percentGenres = require('./src/getDataAsPercent')(genres);

  require('./src/knearest')(percentGenres)

//   require('./getFriends')(req, res);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})