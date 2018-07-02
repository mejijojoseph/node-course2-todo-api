var mongoose = require('mongoose');
var Todo = mongoose.model('Todos', {
    text: {
        type: String,
        required:true,
        trim:true,
        minlength: 2
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedat:{
        type: Number,
        default: 0
    }
});

module.exports = {Todo};