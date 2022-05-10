const app = require('express')()
const express = require('express')
const mongoose = reuire('mongoose')


port = 8080
app.use(express.json())

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}/users`)

})

mongoose.connect(
    process.env.DB_Connect,
    {useNewUrlParser: true}
    () => console.log("connected to DB")
    
)