import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'


const app = express()
app.use(morgan('dev'))


// parser
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:'*',
    credentials:true
}))


