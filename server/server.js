var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    },(e) =>{
        res.send(e);
    });
})

app.listen(3000 , () => {
    console.log("started App");
});

/*
var newTodo = new Todo({
    text: "Wanna go shopping",
    completed: true,
    ompletedat: 123

});

newTodo.save().then((doc) => {
    console.log(`Saved ${doc}`);
    console.log(JSON.stringify(doc,undefined,2));
}, (err)=>{
    console.log(`Error ${err}`);
});
var otherTodo = new Todo({
    text: "Tomotrrows Plans"
});

otherTodo.save().then((doc) => {
    console.log(`Saved ${doc}`);
    console.log(JSON.stringify(doc,undefined,2));
}, (err)=>{
    console.log(`Error ${err}`);
});


*/