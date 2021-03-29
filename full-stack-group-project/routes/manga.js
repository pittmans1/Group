const express= require('express')
const mangaRouter = express.Router()
const Manga = require('../models/mangaSchema.js')


// Get all manga
mangaRouter.get('/', (req, res, next) =>{
    Manga.find((err, manga) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(manga)
    })
})
//get manga by author

mangaRouter.get('/author', (req, res, next) =>{
    Manga.find({author: req.author._id}, (err, mangas) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(mangas)
    })
})
//add manga
mangaRouter.post("/",(req, res, next) =>{
    const newManga = new Manga(req.body)
    newManga.save((err, savedManga) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedManga)
    })
})
//delete manga
mangaRouter.delete('/:mangaId', (req, res, next) =>{
    Manga.findOneAndDelete(
        {_id: req.params.mangaId},
        (err, deletedManga) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`successfully deleted manga: ${deletedManga}`)
        }
    )
})

//update manga
mangaRouter.put('/:mangaId', (req, res, next) =>{
    Manga.findByIdAndUpdate(
        {_id: req.params.mangaId},
        req.body,
        {new: true},
        (err, updatedManga) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedManga)
        }
    )
})

module.exports = mangaRouter