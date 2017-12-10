// grab our packages =======================================
var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var OAuth      = require('oauth');
var axios      = require('axios');
var app        = express();

// environment vars ========================================
var twitterClientKey    = 'PAgCVDBWbFJXQn2juiaK6xWcm';
var twitterClientSecret = 'HGUPxlmzYEAvps14trj8NcojqzpZ6p4wPeGkjkNGOX4D5BMUu5';

// configure our app =======================================
app.use(bodyParser.json());

var oauth2 = new OAuth.OAuth2(
  twitterClientKey,
  twitterClientSecret, 
  'https://api.twitter.com/', 
  null,
  'oauth2/token', 
  null
);

// routes ==================================================
/**
 * Do a twitter search -------------
 */
app.get('/', (req, res) => {
  const query = req.query.q;

  oauth2.getOAuthAccessToken('', {'grant_type': 'client_credentials'}, function (e, accessToken, refreshToken, results) {
    axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${query}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        res.json({ tweets: response.data.statuses });
      });
  });
});

// launch the app ============================================
module.exports = Webtask.fromExpress(app);
