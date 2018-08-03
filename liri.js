require("dotenv").config();
// to access the keys in keys.js
var keys = require("./keys.js");
//this is an import statment//
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
/* var Movies = require('movie-this'); */
var request = require("request");
var fs = require('fs');




//to include the fs library
var fs = require("fs");


//setting up user command through node//
var functCommand = process.argv[2]
var userCommand = "";

//this is so you can search songs/movies, etc with more than one word//
for(var i = 3; i < process.argv.length; i++ ) {
    userCommand = userCommand + " " + process.argv[i];
    
}


//linking to my twitter account//
//var myTweets = {screen_name: "Daniel Tweeterfield"};
function runTwitter() {
    var twitter = new Twitter(keys.twitter);
    console.log(twitter);
    
    var params = {
		screen_name: "@tweeterfield",
		count: 20
	};
    
    twitter.get('statuses/user_timeline', params, function(error, tweets, response){
		if (!error) {
	        for (i=0; i < tweets.length; i++) {
	            var returnedData = ('Number: ' + (i+1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
	            console.log(returnedData);
	            console.log("-------------------------");
	        }
	    };
	});
    
}//end of runTwitter function

//run my function here
function runSpotify(){ 
    var spotify = new Spotify(keys._spotify);
    if(userCommand === undefined) {
        userCommand === "Thunder Road";
    }
    else {
    spotify.search({ type: 'track', query: userCommand }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    
    console.log('Artists: ' + data.tracks.items[0].artists[0].name); 
    console.log('Song Title: ' + data.tracks.items[0].name);
    console.log('Preview Link: ' + data.tracks.items[0].preview_url);
    console.log('Album: ' + data.tracks.items[0].album.name);
    console.log('--------------------');
    });
 }
}//end of runSpotify function

//run omdb function here
function runOmdb() {
    
    var queryUrl = "http://www.omdbapi.com/?t=" + userCommand + "&y=&plot=short&apikey=trilogy";

    var filmSearch;
    if(userCommand === undefined){
		filmSearch = "Mr. Nobody";
	}else{
        filmSearch = userCommand;
		
	};
    
    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
      
          // Parse the body of the site and recover the necessary data
          
          console.log("Title: " + JSON.parse(body)["Title"]);
          console.log("Year: " + JSON.parse(body)["Year"]);
          console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
          console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
          console.log("Country: " + JSON.parse(body)["Country"]);
          console.log("Language: " + JSON.parse(body)["Language"]);
          console.log("Plot: " + JSON.parse(body)["Plot"]);
          console.log("Actors: " + JSON.parse(body)["Actors"]);
        }
      });
  
    
}//end of runOmdb

function runDoWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error){
            console.log(error);
        }
        else{
            var dataArr = data.split(",");
            console.log(dataArr);
            
        }  

    });//end of readFile
}//end of runDoWhatItSays


switch(functCommand){
    case 'spotify-this-song':
        runSpotify();
        break;
    case 'my-tweets':
        runTwitter();
        break
    case 'movie-this':
        runOmdb();
        break
    case `do-what-it-says`:
        runDoWhatItSays();
    }