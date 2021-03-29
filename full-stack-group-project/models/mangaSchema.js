const mongoose = require('mongoose')
const Schema = mongoose.Schema


const mangaSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"Author",
        required: true
    }
})

module.exports=mongoose.model("Manga", mangaSchema)