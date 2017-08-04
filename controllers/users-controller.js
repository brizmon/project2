const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = {};


//THISS
usersController.index = (req, res) => {
  console.log('userController');
  User.findUserNotes(req.user.id)
    .then(notes => {
        res.redirect('/notes');
    }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });
}

usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
    email: req.body.email,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      //res.redirect('/user');
      res.redirect('/notes');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

module.exports = usersController;