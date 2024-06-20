require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact' ,(req ,res)=>{
    res.send("Welcome to contact page")
})
app.get('/login' ,(req,res)=>{
    res.send('  <h>Welcome from login page </h><h>please enter correct email and password</h> </div>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})