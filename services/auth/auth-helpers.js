const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/user');
  return next();
}

function loginRequired(req, res, next) {
  //console.log('hellooooo');
  if (!req.user) return res.redirect('/auth/login');
  return next();
}


module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
}