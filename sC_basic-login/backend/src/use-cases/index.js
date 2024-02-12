const { registerUser } = require("./register-user")
const { listAllUsers } = require("./list-all-users")
const { loginUser } = require("./login-user")

const UserService = {
    registerUser,
    listAllUsers,
    loginUser,
}

module.exports = {
    UserService
}