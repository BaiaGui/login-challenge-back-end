const express = require('express');
const app = express()
const usersRoute = require('./routes/users')



app.get('/', (req, res) => {
    try{
        res.sendStatus(200)
    }
    catch{
        res.sendStatus(500)
    }
  })

app.use('/users', usersRoute);




app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })