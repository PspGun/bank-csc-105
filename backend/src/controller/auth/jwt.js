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
