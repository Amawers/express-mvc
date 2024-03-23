const express = require('express')
const app = express()
app.use(express.json())

const UserRoute = require('./routes/user.route')
app.use('/user', UserRoute)

app.listen(3000, async() => {
    try{
      const db = require('./models')
      await db.sequelize.sync({ alter: true })
      console.log("All models were synchronized successfully.")
    }catch(error){
      console.log(error)
    }
    console.log('Connected to port 3000')
})
