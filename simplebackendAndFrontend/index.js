const express = require("express")
const multer = require("multer")

const PORT = 9000
const app = express()

app.use((req, _, next) => {
    console.log("new request –", req.method, req.url)
    next()
})

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

const upload = multer({ dest: 'uploads/' })
const uploadFilesMiddleware = upload.single('profilePicture')
// pfad und methode sind in dem formular bestimmt, wir können diese selbst wählen bzw. benennen
app.post("/createProfile",
    uploadFilesMiddleware,
    (req, res) => {
        console.log(req.body)
        console.log(req.file)
        console.log(req.files)
        res.send("it works...")
    }
)

app.get("/dasBildVonGeradeEben", (_, res) => {
    res.sendFile(__dirname + "/uploads/6495a1c89b55acc9e972b0c1d9714ebb")
})

app.listen(PORT, () => console.log("Server listening on Port", PORT))



// "FILE UPLOAD"
// Content-Type application/json
// Content-Type application/x-www-form-urlencoded
// Content-Type multipart/form-data  -------------------> multer
