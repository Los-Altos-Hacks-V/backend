const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  

  const genres = require('./spotifyAPI')(req, res);

  const precentGenre = require('./getDataAsPercent')(genres)

  
  
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})