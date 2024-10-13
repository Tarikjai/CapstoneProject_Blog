const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    image :{
        type:String,
        require:true
    }
    ,title :{
        type: String,
        required:true
    },
    description :{
        type: String,
        required:true
    },
    createdAt : {
        type:Date,
        default:Date.now
    }
})

const Article = mongoose.model("Article",articleSchema)

module.exports = articleSchema