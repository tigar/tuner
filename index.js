const _ = require('underscore');
const fs = require('fs');
const SpotifyWebApi = require('spotify-web-api-node');
const dotenv = require('dotenv');
dotenv.config();

function getPlaylist() {
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.SpotifyClientID,
        clientSecret: process.env.SpotifyClientSecret
      });

    console.log(spotifyApi);
    
    return spotifyApi
    .clientCredentialsGrant()
    .then(data => spotifyApi.setAccessToken(data.body['access_token']))
    .catch(err => err);
}

console.log(getPlaylist());
