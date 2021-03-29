const express =  require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/group-project-fullstack',
    {
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    ()=> console.log("connected to the database.")

    )
    app.use('/manga', require('./routes/manga.js'))
    app.use('/comics', require('./routes/comicBook.js'))

    app.use((err, req, res, next) =>{
        console.log(err)
        if(err){
            res.status(err.status)
        }
        return res.send({errMsg: err.message})


    })

    app.listen(9000, ()=>{
        console.log('server is running on local port 9000')
    })