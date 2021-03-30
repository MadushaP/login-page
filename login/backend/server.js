const express = require('express')
const app = express()
const port = 3001

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

app.get('/api/authenticate', (req, res) => {
    res.status(200).send({response: true})
 })