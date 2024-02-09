import db from "../../db/connect.js";
import { validateToken } from "../auth/jwt.js";

export const getTranfer = (req, res) => {
  // const userId = req.body.user_id;
  const token = req.header("authorization").split(" ")[1];
  const userId = validateToken(token);
  db.query(
    "SELECT * FROM `banks` WHERE (owner = ? && type = ?) ORDER BY date DESC",
    [userId, "tranfer"],
    (err, re) => {
      if (err) {
        res.status(400).json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        return res.json({
          success: true,
          data: re,
          error: null,
        });
      }
    }
  );
};
export const tranfer = async (req, res, next) => {
  try {
    // const user_id = req.body.user_id;
    const token = req.header("authorization").split(" ")[1];
    const userId = validateToken(token);
    const receiver = req.body.receiver;
    const note = req.body?.note;
    const amount = req.body.amount;
    const bank = req.body.bank;
    // eslint-disable-next-line no-undef
    const user = await new Promise((resolve, reject) => {
      db.query(
        "SELECT balance, firstname, id FROM `users` WHERE id = ?",
        [user_id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result[0]);
          }
        }
      );
    });
    const receive = await new Promise((resolve, reject) => {
      db.query(
        "SELECT balance, firstname FROM `users` WHERE credit_ID = ?",
        [receiver],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result[0]);
          }
        }
      );
    });

    if (!(user.balance >= amount)) {
      throw new Error("you don't have money enough to tranfer");
    }
    const data = [
      [user_id, user.firstname, receiver, note, amount, bank, "tranfer"],
    ];
    db.query(
      "INSERT INTO banks (`owner`, `sender`, `receiver`,`note`, `amount`, `bank`, `type`) VALUES ?",
      [data],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          const update = [
            [user.balance - amount, user_id],
            [receive.balance + amount, receive.id],
          ];
          db.query("UPDATE users SET balance = ? WHERE id = ?", [
            [update],
            (err) => {
              if (err) {
                throw err;
              }
            },
          ]);
          return res.json({
            success: true,
            data: "tranfer success",
          });
        }
      }
    );
  } catch (error) {
    res.status(400).json({ error });
    return next();
  }
};
