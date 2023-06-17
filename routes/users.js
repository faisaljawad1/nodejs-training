var express = require('express');
var router = express.Router();
var User = require('../models/User');


router.get('/read', function (req, res, next) {
  User.find({}).then(function (users) {
    res.json( users);
  });
});


router.post('/create', function (req, res, next) {
  var newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  newUser.save()
    .then(() => {
      res.status(201).send('User created successfully');
    })
    .catch((err) => {
      console.log('Error creating user:', err);
      res.status(500).send('Error creating user');
    });
});

module.exports = router;
