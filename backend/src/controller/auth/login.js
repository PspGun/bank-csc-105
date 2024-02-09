import db from "../../db/connect.js";
import { generateToken } from "./jwt.js";
export const login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  try {
    db.query(
      "SELECT id ,password FROM `users` WHERE username = ?",
      [username],
      async (err, user) => {
        if (err) {
          throw err;
        } else {
          if (user[0].password != password) {
            return res.status(400).send("password not correct");
          } else {
            const id = user[0].id;
            const token = generateToken(id);
            res.setHeader("token", token);
            return res.status(200).json({ token: token });
          }
        }
      }
    );
  } catch (error) {
    next();
    return res.status(400).json({
      payload: error,
    });
  }
};
