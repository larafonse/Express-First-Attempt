const mongoose = require('mongoose');

//what is Schema? represents how the postb looks. how the data looks

const PostSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);