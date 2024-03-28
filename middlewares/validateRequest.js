exports.registerValidation = (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    validateUsername(username);
    validateEmail(email);
    validatePassword(password);
    next();
  } catch (e) {
    res.status(400).send({ message: `${e}` });
  }
};

exports.loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  try {
    validateEmail(email);
    validatePassword(password);
    next();
  } catch (e) {
    res.status(400).send({ message: `${e}` });
  }
};

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const result = regex.test(email);
  if (result == false) {
    throw new Error("Invalid Email");
  }
}

function validateUsername(username) {
  if (username == "") {
    throw new Error("Invalid Username");
  }
}

function validatePassword(password) {
  if (password == "") {
    throw new Error("Invalid Password");
  }
}
