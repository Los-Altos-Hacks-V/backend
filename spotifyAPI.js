const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

module.exports = (req, res) =>{
    code = req.body.code;
    state = req.body.state;
    const params = new URLSearchParams();
    "https://accounts.spotify.com/api/token"
}