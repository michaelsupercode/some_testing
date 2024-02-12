const express = require("express")

const cors = require("cors")
const morgan = require("morgan")
const { UserService } = require("./use-cases")

const PORT = process.env.PORT || 7600
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get("/", (_, res) => {
    res.send("it works or not, we'll see!")
})


//Routes

//register
app.post("/api/users/register", async(req, res) => {
    try {
        const userInfo = req.body
        const result = await UserService.registerUser(userInfo)

        res.status(201).json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: { message: err.message } })
    }
})

//login
app.post("/api/users/login",

    async(req, res) => {
        try {
            const result = await UserService.loginUser({
                username: req.body.username,
                password: req.body.password
            })
            const redirectionUrl = '/api/users/all';
            res.redirect(303, redirectionUrl);
            // res.status(200).json(result)
        } catch (err) {
            res.status(500).json({ err: { message: err.message } })
        }
    }
)

// show all users
app.get("/api/users/all", async(_, res) => {
    try {
        const allUsers = await UserService.listAllUsers()
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: { message: err.message } })
    }
})
app.listen(PORT, () => console.log("Server ready at", PORT))