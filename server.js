const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
//// consolidated watch route ///
const watchRoutes = require('./routes/watch')

/////// can delete /////
// const todoRoutes = require('./routes/todos')
// //watched
// const watchedRoutes = require('./routes/todos')
//// can delete ///////

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
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
  
app.use('/', mainRoutes)
/// consolidated watch route //
app.use('/watch', watchRoutes)
////// can delete ///
// app.use('/todos', todoRoutes)
//watched
// app.use('/finished', watchedRoutes)
/// can delete //// 

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    