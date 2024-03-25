const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

const usersRoute = require("./routes/users");

app.get("/", (req, res) => {
  try {
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`);
});
