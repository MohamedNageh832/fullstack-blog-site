import { db } from "../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = (req, res) => {
  const q = "SELECT * FROM blogs WHERE email = ? OR username = ?";

  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }

    if (data.length) {
      return res.status(409).json({ message: "User already exists" });
    } else {
      const { username, email, password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashedPaswword = bcrypt.hashSync(password, salt);

      const q = "INSERT INTO blogs(username, email, password) VALUES(?)";

      db.query(q, [username, email, hashedPaswword], (err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "An error occured in the server",
          });
        } else {
          return res.status(200).json({
            success: true,
            message: "User added successfully",
          });
        }
      });
    }
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json("Invalid inputs");
  }

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, (err, data) => {
    if (data.length === 0) {
      return res.status(404).json("User not found");
    }

    const passwordsMatch = bcrypt.compareSync(password, data[0].password);

    if (passwordsMatch) {
      const { password, ...otherData } = data[0];

      // TODO: Change the private key to enviroment variables
      const accessToken = jwt.sign({ id: data[0].id }, "privatekey");

      res.cookie("access-token", accessToken, {
        httpOnly: true,
      });

      return res.status(200).json(otherData);
    }
  });
};

export { register, login };
