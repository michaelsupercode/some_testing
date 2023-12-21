const jwt = require("jsonwebtoken");
const { checkEmailExists } = require("../db_access/user_dao");
const { hashPassword } = require("../utility/pwHash");

const generateToken = (user) => {
  const Now = Date.now() / 1000;
  const expiresAt = 24 * 60 ** 2;
  const tokenExpired = Now + expiresAt;
  const token = jwt.sign(
    {
      sub: user._id,
      iat: Now,
      exp: tokenExpired,
      type: "access_token",
    },
    process.env.JWT_SECRET
  );
  return token;
};

async function LoginUser({ email, password }) {
  const foundUser = await checkEmailExists(email);
  console.log("FoundUSer", foundUser);
  if (!foundUser) {
    throw new Error("User not found.");
  }
  const passwordHash = hashPassword(password);
  const pwIsCorrect = foundUser.passwordHash === passwordHash;
  if (!pwIsCorrect) {
    throw new Error("Sorry! No Match for Email and Password");
  }
  const token = generateToken(foundUser);
  const userObjId = foundUser._id;
  console.log("LoginUser", { token: token, id: foundUser._id });
  return { token, userObjId };
}

module.exports = { LoginUser };
