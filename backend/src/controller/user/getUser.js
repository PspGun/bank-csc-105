import db from "../../db/connect.js";
export const getUser = async (req, res) => {
  db.query("SELECT * FROM `users`", (err, re) => {
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
  });
};
