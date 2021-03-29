const express =  require('express')
const ComicBookRouter = express.Router()
const Comic = require('../models/comicBookSchema.js')

//get all comic books
ComicBookRouter.get('/', (req,res,next)=>{
    Comic.find((err, comics) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comics)
    })
})

//get comics by author
ComicBookRouter.get('/author', (req, res, next) =>{
    Comic.find({author: req.author._id}, (err, comics) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comics)
    })
})

//post new comic
ComicBookRouter.post('/', (req, res, next) =>{
    const newComic = new Comic(req.body)
    newComic.save((err, savedComic) =>{
        if(err){
            res.status(500)
            return next(err)

        }
        return res.status(201).send(savedComic)
    })
})

// delete comic from invemntory.
ComicBookRouter.delete('/:comicId', (req, res, next) =>{
    Comic.findOneAndDelete(
        {_id: req.params.comicId},
        (err, deletedComic) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`succesfully deletd comic: ${deletedComic.title}`)



        }

    )
})
//update a comic
ComicBookRouter.put('/:comicId', (req, res, next) =>{
    Comic.findOneAndUpdate(
        {_id: req.params.comicId},
        req.body,
        {new:true},
        (err, updatedComic)=>{
            if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(updatedComic)
        }
        
    )
})
module.exports= ComicBookRouter