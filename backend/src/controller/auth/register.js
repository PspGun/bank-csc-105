import db from "../../db/connect.js";
import { v4 as uuidv4 } from "uuid";
export const register = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const existingUser = await db.query(
      "SELECT * FROM `users` WHERE username = ?",
      [username]
    );
    // If the username exists, throw an error
    if (existingUser.length > 0) {
      return res
        .status(400)
        .json({ success: false, payload: "Username already exists" });
    }

    const credit_ID = uuidv4();
    const data = [[username, password, firstname, lastname, email, credit_ID]];
    db.query(
      "INSERT INTO `users` (`username`, `password`, `firstname`, `lastname`, `email`,`credit_ID`) VALUES  ?",
      [data],
      (err) => {
        if (err) throw err;
        else {
          return res
            .status(200)
            .json({ success: true, payload: "register succesas" });
        }
      }
    );
  } catch (error) {
    return res.status(400).json({ success: false, payload: error.message });
  }
};
// INSERT INTO `users` (`username`, `password`, `firstname`, `lastname`, `email`)
// VALUES ('example_username', 'example_password', 'John', 'Doe', 'john.doe@example.com');
