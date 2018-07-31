
// to access the keys in keys.js
var keys = require("./keys.js");
//this is an import statment//
var Twitter = require('twitter');

var twitter = new Twitter ({
    consumer_key: 'pB7wuoGgNeVytiwOTcM5rjFoo',
    consumer_secret: 'y5jGzDPc3tWRmirYvQFVgQLlHxFLsC8jJJFXb9baXzVotnNKfa',
    access_token_key: '912111857481031680-r2o82iL1gLq3lL619BbhnWIhW8SnI4g',
    access_token_secret: 'CB0DfVuIlvauU6fqX4sD9zl6Dkgs0xDhew6tdxWgz7jO8',
});

console.log("hello");

//linking to my twitter account//
var myTweets = {screen_name: "Daniel Tweeterfield"};