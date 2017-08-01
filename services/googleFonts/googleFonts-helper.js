require('isomorphic-fetch');
require('dotenv').config();

function getFont(req, res, next) {
  fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.GOOGLE_KEY}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      console.log ("  see below " ); 
      console.log (jsonRes.main ); 
      res.locals.font = jsonRes.items;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
}

module.exports = {
  getFont,
}