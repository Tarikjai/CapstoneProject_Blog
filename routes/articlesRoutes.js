const express = require('express')
const router = express.Router()
const Article  = require('../models/article')


router.get('/new', (req,res)=>{
    res.render('new.ejs')
})

router.get('/edit/:id', (req,res)=>{
    res.render('edit.ejs')
})
/*
router.post('/', (req,res)=>{
    req.article = new Article()
    console.log(req)
   // req.article= new article

    res.status(200)
})*/
// Route pour créer un article
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    })

    try {
        const newArticle = await article.save()
        res.redirect(`/articles/${newArticle.id}`)
    } catch (err) {
        res.render('new.ejs', { article: article, errorMessage: 'Error creating article' })
    }
})

module.exports = router

