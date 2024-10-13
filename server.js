const express = require('express')
require('dotenv').config()
const path = require('path')
const  PORT = process.env.PORT
const articlesRoutes = require('./routes/articlesRoutes')
const app = express()

// Set the view engine to EJS
app.set('view engine', 'ejs')
// Set the directory for EJS view templates to the 'views' folder
app.set('views', path.join(__dirname, 'views','articles'))

// Server static files 
app.use(express.static(path.join(__dirname,'/public')))



app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.use('/articles', articlesRoutes)

app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})