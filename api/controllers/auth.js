import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = (req, res) => {
  const { username, email, password } = req.body;
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [email, username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.length) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedPaswword = bcrypt.hashSync(password, salt);

      const q = "INSERT INTO users(username, email, password) VALUES(?)";
      const values = [username, email, hashedPaswword];

      db.query(q, [values], (err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "An error occured in the server",
          });
        } else {
          console.log(data);
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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Invalid username or password!" });
  }

  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [email], (err, data) => {
    if (data.length === 0) {
      return res.status(404).json({ message: "User not found" });
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
