const express = require('express')
// import express from "express"


const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('Dev_anshika98')
})

app.get('/login',(req, res)=>{
    res.send('<h1>please login at chai</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})