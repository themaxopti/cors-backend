const express = require('express')
const Cors = require('cors')


const app = express()

app.use(Cors())
app.use(express.json({ extended: true }))


app.use('/api',require('./routes/api.routes'))



const PORT = process.env.PORT || 4000

app.listen(PORT, () => { console.log(`app has been started on port ${PORT}`) })