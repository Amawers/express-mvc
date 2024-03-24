const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json())
app.use(cookieParser())




const AuthRoute = require('./routes/auth.route')
app.use('/auth', AuthRoute)



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
