const express = require('express')
const router = express.Router()
const Article  = require('../models/article')


router.get('/new', (req,res)=>{
    res.render('new.ejs')
})

router.get('/edit/:id', (req,res)=>{
    res.render('edit.ejs')
})
 
 
// Route pour créer un article
router.post('/', async (req, res) => {
    console.log(req.body)
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

