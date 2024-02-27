import jwt from "jsonwebtoken";

const key = "wuuuuuuuuuuuw";
export const generateToken = (id) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
      userId: id,
    },
    key
  );
  return token;
};

export const validateToken = (token) => {
  const id = jwt.verify(token, key);
  return id.userId;
};

export const checkauth = (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (token) {
      if (!jwt.verify(token.split(" ")[1], key)) {
        throw err;
      }
    } else {
      throw err;
    }
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
