const db = require('../config/db');

// constructor
const User = function (tutorial) {
    this.name = user.name;
    this.id = user.id;
};

User.findById = (id, result) => {
    db.query(`SELECT * FROM user WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }
        // not found Tutorial with the id
        result({ msg: "not_found" }, null);
    });
};

User.getAll = (result) => {
    let query = "SELECT * FROM users";
    db.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
