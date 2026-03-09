import jwt from "jsonwebtoken";

export function accessTokenGen(user) {

  return jwt.sign(
    {sno:user.SNO, category: user.CATEGORY, createDate: user.CREATED_DATE}, 
    process.env.ACCESS_TOKEN_SECRET, 
    {expiresIn: '1h'}
  );

}

export function refreshTokenGen(user) {

  return jwt.sign(
    {sno:user.SNO, category: user.CATEGORY, createDate: user.CREATED_DATE},
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

}