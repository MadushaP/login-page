const express = require('express')
const app = express()
const https = require('https')
const port = 3001
const fs = require('fs')
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const options = {
  key: fs.readFileSync(__dirname + '/key.pem', 'utf8'),
  cert: fs.readFileSync(__dirname + '/server.crt', 'utf8'),
}

var salt = bcrypt.genSaltSync(10);
let hash

//Example
let users = { 'test': 'password', 'bob': 'mypassword' }

const checkPassword = (username, password, apiResponse) => {
  if (users[username] !== undefined) {
    return bcrypt.hash(password, salt, function (err, res) {
      hash = res
      return bcrypt.compare(users[username], hash, function (err, res) {
        if (res) {
          apiResponse.status(200).send({ response: true })
        } else {
          apiResponse.status(200).send({ response: false })
        }
      })
    })
  } else {
    apiResponse.status(200).send({ response: false })
  }

}
https.createServer(options, app).listen(port, () => {

  console.log(`Listening at  https://localhost:${port}`)
})


app.post('/api/authenticate', (req, res) => {
  checkPassword(req.body.username, req.body.password, res)
})