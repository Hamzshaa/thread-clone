import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateTokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  //   we can use any string instead of jwt
  res.cookie("jwt", token, {
    httpOnly: true, // This cookie cannot be accessed by the browser (it makes it more secure)
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    sameSite: "strict", // this is also to protect the site more
  });

  return token;
};

export default generateTokenAndCookie;
