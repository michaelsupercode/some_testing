import express from "express"
import expensesRouter from './expenses/controller.js'

const PORT = 3000
const app = express()

app.use('expenses', expensesRouter)

app.listen(PORT, () => {
    console.log(`listening PORT ${PORT} `)
})