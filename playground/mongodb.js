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

        // db.collection('Todos').find({_id: new ObjectID('5c3121389f2c9e6f49ba3ef6')}).toArray().then((docs) => {
        //     console.log(docs);
        // }, (err) => {
        //     console.log(err);
        // });

        // db.collection('Todos').deleteMany({_id: new ObjectID('5c3121389f2c9e6f49ba3ef6')}).then((result) => {
        //     console.log(result);
        // }, (err) => {
        //     console.log(err);
        // });

        // db.collection('Todos').deleteOne({_id: new ObjectID('5c3121389f2c9e6f49ba3ef6')}).then((result) => {
        //     console.log(result);
        // }, (err) => {
        //     console.log(err);
        // });

        db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c3a48717b304a46cbca7886')}).then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });

        db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c31e4090fe7e92446f71f4f')}, {
            $set: {text: 'New Text'}
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });

        client.close();

    }
});