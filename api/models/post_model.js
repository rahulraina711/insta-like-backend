const mongoose = require('mongoose');

const postSchema= new mongoose.Schema({
    desc: {type: String, required: true},
    postImage: {type: String, required:true},
    email:{type: String, required:true},
    userId:{type: String, required:true},
    likes:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
},
{timestamps:true});

module.exports = mongoose.model("Post", postSchema);