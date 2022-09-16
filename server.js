const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const cors = require('cors')

const mainRoutes = require('./routes/main')
// consolidated watch route ///
const watchRoutes = require('./routes/watch')


require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
//const path = require('path')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
app.use(cors())  

//Routes for logins, etc.
app.use('/', mainRoutes)
/// consolidated watch route. 
app.use('/api', watchRoutes)//the routes for the views are api/whatever

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on localhost: ${process.env.PORT}`)
})    