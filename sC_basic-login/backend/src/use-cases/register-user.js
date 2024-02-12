const { UserDAO } = require("../db-access");
const { makeUser } = require("../domain/User");
const { createRandomSalt, createPasswordHash } = require("../utils/hash");
const { userToUserView } = require("./functions/userToUserView");

async function registerUser({ username, email, password }) {
    const foundUser = await UserDAO.findUserByEmailOrUsername(username, email)
    
    if(foundUser) {
        const errorMessage = foundUser.username === username 
            ? "Username " + username + " already taken!"
            : "Account with this e-mail already exists!"
        throw new Error(errorMessage)
    }

    const passwordSalt = createRandomSalt()
    const passwordHash = createPasswordHash(password, passwordSalt)

    const user = makeUser({ username, email, passwordHash, passwordSalt })
    const insertResult = await UserDAO.insertUser(user)

    const wasSuccessFull = insertResult.acknowledged === true && insertResult.insertedId
    if(!wasSuccessFull) {
        throw new Error("Registration failed, please try again.")
    }
    
    const registeredUser = await UserDAO.findUserById(insertResult.insertedId)
    const registeredUserView = userToUserView(registeredUser)
    return registeredUserView
}

module.exports = {
    registerUser
}