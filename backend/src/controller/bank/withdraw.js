import db from "../../db/connect.js";
export const getWithdraw = (req, res) => {
  db.query(
    "SELECT * FROM `bank` ORDER BY date DESC WHERE type = ? id = ?",
    ["withdraw", req.body.user_id],
    (err, re) => {
      if (err) {
        res.json({
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
export const withdraw = async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const receiver = null;
    const note = req.body?.note;
    const amount = req.body.amount;
    const bank = req.body.bank;
    // eslint-disable-next-line no-undef
    const user = await new Promise((resolve, reject) => {
      db.query(
        "SELECT balance, firstname FROM `users` WHERE id = ?",
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
    if (!(user.balance >= amount)) {
      throw new Error("you don't have money enough to with draw");
    }
    const data = [
      [user_id, user.firstname, receiver, note, amount, bank, "withdraw"],
    ];
    db.query(
      "INSERT INTO banks (`owner`, `sender`, `receiver`,`note`, `amount`, `bank`, `type`) VALUES ?",
      [data],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          db.query("UPDATE users SET balance = ? WHERE id = ?", [
            user.balance - amount,
            user_id,
            (err) => {
              if (err) {
                throw err;
              }
            },
          ]);
          return res.json({
            success: true,
            data: "withdraw success",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
    return next();
  }
};
