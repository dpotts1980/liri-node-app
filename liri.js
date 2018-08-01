require("dotenv").config();
// to access the keys in keys.js
var keys = require("./keys.js");
//this is an import statment//
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var twitter = new Twitter (keys.twitter);

console.log("hello");


//to include the fs library
var fs = require("fs");


//setting up user command through node//
var functCommand = process.argv[2]
var userCommand = process.argv[3];

//linking to my twitter account//
//var myTweets = {screen_name: "Daniel Tweeterfield"};


//run my function here
function runSpotify(){ 
    var spotify = new Spotify(keys._spotify);
    
    spotify.search({ type: 'track', query: userCommand }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    
    console.log(data.tracks.items[0].artists); 
    });
}

switch(functCommand){
    case 'spotify-call':
        runSpotify();
        break;
   //case 'twitter-call:
      //runTwitter();
      //break
}