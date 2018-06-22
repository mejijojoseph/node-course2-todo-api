const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(error,client) => {
    if(error) {
        return console.log('Unable to connect');
    }
    console.log('connected Successfully');
    const db = client.db('TodoApp');
    var collection = db.collection('Todos');

    // db.collection('Todos').find({_id: new ObjectID('5b2a8d283400ba1f74f32e6c')}).toArray().then((docs)=>{
    //     console.log("Todos listing");
    //     console.log(JSON.stringify(docs, undefined,2));
    // },(err) => {
    //     console.log('Unable to fetch the Records',err);
    // });

    collection.find().count().then((count)=>{
        console.log("The count of todos is :",count);
    })

    var userCollection = db.collection('Users');

    userCollection.find({Username:'jijo'}).toArray().then((docs) => {
        console.log(`Users with name Jijo`);
        console.log(JSON.stringify(docs,undefined,2));
    });

    userCollection.find({name:'Jijo'}).count().then((count) => {
        console.log(`Users with name Jijo is ${count}`);
    });
    client.close();
});