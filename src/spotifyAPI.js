const fetch = require('node-fetch');
const { URLSearchParams } = require('url');


module.exports = async (req, res) =>{
    // Get Token from provided Access Code
    code = req.body.code;
    let params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:8080');
    params.append('client_id', 'dcf1a2dc85864c11aaf00c98daed0e8a');
    params.append('client_secret', '981eb984ccc842dd9b349b7273738cbc');
    let response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    })
    let data = await response.json();
    const token = data["access_token"]
    console.log(token)
    const tokenB = "Bearer " + token

    // Get Recently Played Songs from Token
    response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=50', {
        method: 'GET',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': tokenB }
    })
    data = await response.json();
    console.log(data);
    res.send(data)
    // USE DATA ABOVE TO CALCULATE NUMBERS FOR GENRE.
    // Data Format: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recently-played

    // Get User Info from Token
    if (true) {
        // CHANGE 'TRUE' TO A CONDITION THAT CHECKS IF USER IS ALREADY IN SQL DATABASE
        response = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': tokenB }
        })
        data = await response.json();
        let display_name = data["display_name"];
        let email = data["email"];
        let username = data["id"];

        // res.send(display_name, email, username)
        console.log(display_name, email, username);
        // USE VARIABLES ABOVE TO ADD A NEW ROW IN SQL DATABASE
    }
}