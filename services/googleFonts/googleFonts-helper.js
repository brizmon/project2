require('isomorphic-fetch');
require('dotenv').config();

function getFont(req, res, next) {
  fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.GOOGLE_KEY}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      let fontArray=jsonRes.items;

      //   for (let font of fontArray){
      //   console.log (font.family); 
      //   }
      // console.log("see below" ); 
      // console.log(jsonRes.items); 
      res.locals.font = fontArray;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
};



module.exports = {
  getFont,
}