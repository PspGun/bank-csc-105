import db from "../../db/connect.js";
import jwt from "jsonwebtoken";

export const key = "wuuuuuuuuuuuw";
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
            throw Error("password not correct");
          } else {
            const id = user[0].id;
            const token = jwt.sign(
              {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                data: id,
              },
              key
            );
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
