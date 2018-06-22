//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

//var obj =  new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) => {
    if(error) {
        return console.log('Unable to connect');
    }
    console.log('connected Successfully');
    const db = client.db('TodoApp');
   /* db.collection('Todos').insertOne({
        test: "Something to do",
        completed: false
    },(err,result) => {
        if(err){
            return console.log("Unable to execute insert",err);
        }

        console.log(JSON.stringify(result.ops, undefined ,2));
    });
    */

    db.collection('Users').insertOne({
        name: "Jijo",
        age: 32,
        location: "Bangalore" 
    },(err,result) => {
        if(err){
            return console.log("Unable to execute insert",err);
        }

        //console.log(JSON.stringify(result.ops, undefined ,2));
        console.log(result.ops[0]._id.getTimestamp());
    });
    client.close();
});