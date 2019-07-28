const User = require('../../models/User');

module.exports = (app) => {
  app.get('/api/user', (req, res, next) => {
    User.find()
      .exec()
      .then((counter) => res.json(counter))
      .catch((err) => next(err));
  });

  app.post('/api/auth/facebook', function (req, res, next) {
    const newUser = new User({
      fbID: req.body.fbID,
      username: req.body.username,
      email: req.body.email
    });
    //check if not existing
    User.findOne({fbID: newUser.fbID}).then(user => {
      if (user) {
        return res.status(200).json(user);
      } else {
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      }
      ;
    });
  });
}
