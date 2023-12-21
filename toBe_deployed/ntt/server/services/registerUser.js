const { createNewUser, checkEmailExists } = require("../db_access/user_dao");
const { hashPassword } = require("../utility/pwHash");

async function registerUser({ username, email, password }) {
  const foundUser = await checkEmailExists(email);
  console.log(email);
  if (foundUser) {
    console.log("user Exist! Please Log in!");
    throw new Error("User with this Email already exist. Please log in!");
  }
  const passwordHash = hashPassword(password);
  const newUser = {
    username,
    email,
    passwordHash,
  };
  const insertResult = await createNewUser(newUser);
  if (!insertResult.acknowledged) {
    throw new Error("Failed to create new User");
  }
  return;
}

module.exports = {
  registerUser,
};
