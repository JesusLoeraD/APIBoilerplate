const User = require('../models/user.model')


const getUsers = async (req, res) => {
  const title = req.query.title;
  User.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error"
      });
    else res.send(data);
  });
}

const getUser = async (req, res) => {
  const id = req.params.userId;
};

module.exports = {
  getUsers,
  getUser
};