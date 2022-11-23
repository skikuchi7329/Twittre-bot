require('dotenv').config();
const Twitter = require('twitter');



const client = new Twitter({
  consumer_key: process.env.APIKEY,
  cosumer_secret: process.env.APIKEYSECRET,
  access_token_key: process.env.ACCESSTOKEN,
  access_token_secret: process.env.ACCESSTOKENSECRET
});

const message = "test tweet";

client.get('favorites/list'), function({error, tweet, response}) {
  if(error) throw error;
  console.log(tweet);
  console.log(response);
}

client.post('statuses/update', { status: message }, function({error, tweet, response}) {
  if(error) throw error;
  console.log(tweet);     
  console.log(response);  
});