const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comicBookSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    price:{
        type:Number
    },
    imgUrl:{
        type:String,
        required: true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"Author",
        required:true
    },
    description:{
        type:String
    }
})


module.exports=mongoose.model('ComicBook', comicBookSchema)