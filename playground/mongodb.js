// const MongoClient = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect');
    } else {
        console.log('Connected');

        const db = client.db('TodoApp');

        // db.collection('Todos').insertOne({
        //     text: 'Some text',
        //     complete: false
        // }, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     // console.log(result);
        //
        // });

        db.collection('Todos').find({_id: new ObjectID('5c3121389f2c9e6f49ba3ef6')}).toArray().then((docs) => {
            console.log(docs);
        }, (err) => {
            console.log(err);
        });

        client.close();

    }
});