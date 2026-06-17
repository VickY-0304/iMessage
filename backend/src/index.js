import express from 'express'
import "dotenv/config"
const app = express()
const PORT = process.env.PORT || 2026

app.get('/', (req,res) => {
    res.send('hiii')
})

app.listen(PORT, () => {
    console.log(`Server connected port ${PORT}`)
}) 