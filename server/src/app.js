import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import router from './api/v1/routes/index.js'
import bodyParser from 'body-parser'

const app = express()

app.use(morgan('dev'))
app.use(helmet())

app.use(cors({
    origin: "*"
}))
app.use(compression())
app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
}))
app.use('/', router)



app.use((req, res, next) => {
    const error = new Error('Not Found 1')
    error.status = 404
    next(error)
})

app.use((err, req, res, next) =>{
    const statusCode = err.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: err.message || 'Internal Server Error'
    })
})

export default app