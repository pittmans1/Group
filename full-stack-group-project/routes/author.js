const express= require('express')
const author = require('../models/author.js')
const authorRouter = express.Router()
const Author = require('../models/author.js')


// Get all authors
authorRouter.get('/', (req, res, next) =>{
    Author.find((err, author) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(author)
    })
})

//add auhtor
authorRouter.post("/",(req, res, next) =>{
    const newAuthor = new Author(req.body)
    newAuthor.save((err, savedAuthor) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAuthor)
    })
})
//delete author
authorRouter.delete('/:authorId', (req, res, next) =>{
    Author.findOneAndDelete(
        {_id: req.params.authorId},
        (err, deletedAuthor) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`successfully deleted manga: ${deletedAuthor}`)
        }
    )
})

//update auhtor
authorRouter.put('/:authorId', (req, res, next) =>{
    Author.findByIdAndUpdate(
        {_id: req.params.authorId},
        req.body,
        {new: true},
        (err, updatedAuthor) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedAuthor)
        }
    )
})

module.exports = authorRouter