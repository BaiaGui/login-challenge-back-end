const pool = require("../db/index");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const query =
    "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)";
  const values = [username, email, password];

  try {
    await pool.query(query, values);
    res.status(200).send("user registered successfully");
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.loginUser = async () => {
  try {
    console.log("logging user");
  } catch (e) {
    console.error(e);
  }
};
