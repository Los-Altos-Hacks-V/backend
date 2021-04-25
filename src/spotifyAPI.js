const fetch = require('node-fetch');
const { URLSearchParams } = require('url');


module.exports = async (req, res) =>{
    code = req.body.code;
    // state = req.body.state;


    // let paramaters = {
    //     grant_type: 'authorization_code',
    //     code: code,
    //     redirect_uri: 'http://localhost:8080',
    //     client_id: 'dcf1a2dc85864c11aaf00c98daed0e8a',
    //     client_secret: '981eb984ccc842dd9b349b7273738cbc'
    // };

    const params = new URLSearchParams();

    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:8080');
    params.append('client_id', 'dcf1a2dc85864c11aaf00c98daed0e8a');
    params.append('client_secret', '981eb984ccc842dd9b349b7273738cbc');


    // console.log(params)


    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    })

    const data = await response.json();

    console.log(data)
    
    
    // .then(res => res.json())
    //   .then(json => console.log(json));
    

}