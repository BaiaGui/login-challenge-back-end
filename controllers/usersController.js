const crypto = require("crypto");
const pool = require("../db/index");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const { passwordHash, salt } = hashPassword(password);
  console.log(salt + "l:" + salt.length);
  const query = "INSERT INTO users (username, email, password_hash, salt) VALUES ($1, $2, $3, $4)";
  const values = [username, email, passwordHash, salt];

  try {
    await pool.query(query, values);
    res.status(200).send({ message: "user registered successfully" });
  } catch (e) {
    res.status(400).send({ message: `${e}` });
  }
};

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = crypto.pbkdf2Sync(password, salt, 100, 64, `sha512`).toString(`hex`);
  return { salt, passwordHash };
}

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = $1";
  const values = [email];

  try {
    const queryResult = await pool.query(query, values);
    userData = queryResult.rows[0];

    if (validatePassword(userData.password_hash, userData.salt, password))
      res.status(200).send({
        message: "logged successfully",
        content: queryResult.rows[0],
      });
    else {
      throw new Error("invalid email or password");
    }
  } catch (e) {
    res.status(400).send({ message: `${e}` });
  }
};

function validatePassword(passwordHash, salt, plainTextPassword) {
  const hash = crypto.pbkdf2Sync(plainTextPassword, salt, 100, 64, `sha512`).toString(`hex`);
  return hash == passwordHash;
}
