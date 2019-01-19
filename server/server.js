const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

let mongoose = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    // console.log(res);
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        console.log(e);
        res.status(400).send(e);

    });

    console.log(todo);
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);

    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    Todo.findById(id).then((todo) => {
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);

    });
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    Todo.findByIdAndDelete(id).then((todo) => {
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);

    });
});

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed'])

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }




    Todo.findByIdAndUpdate(id, {$set: body}).then((todo) => {
        if (!todo) {
            res.send.status(404).send();;
        }
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);

    });
});

app.listen(3000, () => {
    console.log('Started on port 3000!!');
});
