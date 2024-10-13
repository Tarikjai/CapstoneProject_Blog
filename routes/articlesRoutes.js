const express = require('express')
const router = express.Router()
const Article  = require('../models/article')


router.get('/new', (req,res)=>{
    
    res.render('new.ejs',{ article : new Article()})
})

router.get('/edit/:id', async (req,res)=>{
    let article = await Article.findById(req.params.id)
    console.log(article)
    res.render('edit.ejs', {article: article})
})

router.get('/show/:id', async (req,res)=>{
    let article = await Article.findById(req.params.id)
    res.render('show.ejs', {article: article})
})
 
 
// Route pour créer un article
router.post('/', async (req, res) => {
   // console.log(req.body)
    const article = new Article({
        image: req.body.image,
        title: req.body.title,
        description: req.body.description,
    })
    try {
        const newArticle = await article.save()
        // res.redirect(`/articles/${newArticle.id}`)
        res.status(200).json(newArticle)
    } catch (err) {
        res.render('new.ejs', { article: article, errorMessage: 'Error creating article' })
    }
})

module.exports = router

