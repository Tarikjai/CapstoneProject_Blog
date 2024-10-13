const express = require('express')
const router = express.Router()
const Article  = require('../models/article')


router.get('/new', (req,res)=>{
    
    res.render('new.ejs',{ article : new Article()})
})

router.get('/edit/:id', async (req,res)=>{
    let article = await Article.findById(req.params.id)
   
    res.render('edit.ejs', {article: article})
})

router.get('/show/:id', async (req,res)=>{
    let article = await Article.findById(req.params.id)
    res.render('show.ejs', {article: article})
})
 
 
// Route pour créer un article
router.post('/', async(req,res,next)=>{
    req.article = new Article()
      
    next() 
},saveArticleAndRedirect('edit'))

router.put('/:id',async(req,res,next)=>{
    req.article = await Article.findById(req.params.id)
     
    next() 
},saveArticleAndRedirect('edit'))

function saveArticleAndRedirect(path) {
    return async(req,res)=>{
        let article = req.article
            article.title= req.body.title,
            article.description= req.body.description,
            article.image= req.body.image
        try {
            article = await article.save()
           
            res.redirect(`/articles/show/${article.id}`)
        } catch (e) {
             
            res.render(`articles/${path}`, { article : article }

            )
        }
    }

}



router.delete('/:id', async(req,res)=>{
      await Article.findByIdAndDelete(req.params.id)
      console.log(req.params)
      res.redirect('/')
})

module.exports = router