const {getUserByEmail} = require('../db-access/user-access')
const {hashPassword} = require('../utility/index')
const {generateToken} = require('../utility/index')


async function loginUserService( email,password ){
    const foundUser = await getUserByEmail(email)


    if(!foundUser) {
        throw new Error('User fuckin not found!')
    }
    const passHash = hashPassword(password)
    const passwordIsCorrect = foundUser.passwordHash === passHash
    if(!passwordIsCorrect){
        throw new Error('Email and Password do not match.')
    }
    const token = generateToken(foundUser)
}

module.exports = {loginUserService}