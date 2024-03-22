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

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = $1 AND password_hash = $2";
  const values = [email, password];

  try {
    const queryResult = await pool.query(query, values);
    console.log(queryResult.rows);

    if (queryResult.rowCount != 0) res.sendStatus(200);
    else {
      throw new Error("invalid email or password");
    }
  } catch (e) {
    res.status(400).send(e.messsage);
  }
};
