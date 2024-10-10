import app from './src/app.js'
import 'dotenv/config'
import connectToDB from './src/config/connectDB.js'
const PORT = process.env.PORT || 5000
let server;
connectToDB().then(() => {
    server = app.listen(PORT, () =>{
        console.log(`Server listening on http://localhost:${PORT}/`)
    })
})
process.on('SIGINT', () => {
    server.close( () => console.log('Server closed'))
})
