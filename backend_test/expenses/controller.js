import { express } from "express"
import db from "../utilitis/db"

const router = express.Router()

router.use(express.json())

router.get('/', async (req,res) => {
    try{
        const expenses = await db.collection('expenses').find().toArray()
        res.json(expenses)
    } catch (error) {
        console.errror(error)
        res.sendStatus(500)
    }
})

export default router