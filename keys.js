console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
/* 
//authenticating the npm//
var twitterKeys = {
    consumer_key: 'pB7wuoGgNeVytiwOTcM5rjFoo',
    consumer_secret: 'y5jGzDPc3tWRmirYvQFVgQLlHxFLsC8jJJFXb9baXzVotnNKfa',
    access_token_key: '912111857481031680-r2o82iL1gLq3lL619BbhnWIhW8SnI4g',
    access_token_secret: 'CB0DfVuIlvauU6fqX4sD9zl6Dkgs0xDhew6tdxWgz7jO8',
  });

  var spotifyKeys = {
    id: "c92096f3f1a54eadbeb8ea5bf8412c98",
    secret: "ee310377e6284707be654d92c60895db"
};
  //exports!
module.exports = {
    twitterKeys: twitterKeys,

    
} */