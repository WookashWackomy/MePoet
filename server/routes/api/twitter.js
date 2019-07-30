const config = require("../../../config/config");

const Twitter = require("twitter");
const twitterClient = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  bearer_token: config.TWITTER_BEARER_TOKEN
});

module.exports = app => {
  app.get("/api/twitter/search", (req, res, next) => {
    let search = req.query.q;
    console.log(search);
    twitterClient.get("search/tweets", { q: search }, function(
      error,
      tweets,
      response
    ) {
      let tweetResponse = [];
      tweets.statuses.forEach(function(tweet) {
        tweetResponse.push({
          id: tweet.id,
          text: tweet.text,
          hashtags: tweet.entities.hashtags,
          user: tweet.user.name,
          url: tweet.extended_entities.media.url
        });
      });
      res.json(tweetResponse);
    });
  });
};
