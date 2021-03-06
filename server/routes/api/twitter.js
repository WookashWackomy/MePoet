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
    try {
      twitterClient.get("search/tweets", { q: search }, function(
        error,
        tweets,
        response
      ) {
        let tweetsResponse = [];
        tweets.statuses.forEach(function(tweet) {
          tweetsResponse.push({
            id: tweet.id,
            body: tweet.text,
            title: "",
            hashtags: tweet.entities.hashtags,
            url: tweet.entities.urls.url,
            author: tweet.user.name
          });
        });
        res.json(tweetsResponse);
      });
    } catch (err) {
      console.log(err);
    }
  });
};
