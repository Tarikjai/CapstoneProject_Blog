const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')
const  PORT = process.env.PORT
const articlesRoutes = require('./routes/articlesRoutes')
const Article  = require('./models/article')
const app = express()


mongoose.connect('mongodb+srv://tarikjaidani:Atiminou5*@cluster0.ppcyl.mongodb.net/capstoneProject?retryWrites=true&w=majority&appName=Cluster0')

app.use(express.urlencoded({ extended: false}))

app.use(express.json());
// Set the view engine to EJS
app.set('view engine', 'ejs')
// Set the directory for EJS view templates to the 'views' folder
app.set('views', path.join(__dirname, 'views','articles'))

// Server static files 
app.use(express.static(path.join(__dirname,'/public')))



app.get('/', async(req,res)=>{
    const articles = await Article.find().sort({createdAt :"desc"})
   
    res.render('index.ejs', { articles : articles})
})



app.use('/articles', articlesRoutes)

app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})