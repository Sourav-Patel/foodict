const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");

module.exports = (body) => {
  bcrypt.hash(body.password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      const newUser = new User({
        fname: body.fname,
        lname: body.lname,
        email: body.email,
        phone_number: body.phone_number,
        password: hash,
      });
      newUser.save();
    }
  });
};
