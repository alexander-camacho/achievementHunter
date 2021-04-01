require('dotenv').config()
const express = require("express");
const path = require("path");
const cors = require('cors')
const OAuthClient = require('./config/client');
const PORT = process.env.PORT || 3001;

let token = ''

async function newToken() {
  const oauthClient = new OAuthClient()
  const result = await oauthClient.getToken()
  token = result.token.access_token
}
newToken()
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Send every request to the React app
// Define any API routes before this runs
app.get('/token', (req, res) => {
  res.send({
    token: token
  })
})
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
