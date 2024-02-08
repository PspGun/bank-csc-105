import db from "../../db/connect.js";
export const getBalance = (req, res) => {
  const userId = req.body.user_id;
  db.query(
    "SELECT `balance` FROM `users` WHERE id = ? ",
    [userId],
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
