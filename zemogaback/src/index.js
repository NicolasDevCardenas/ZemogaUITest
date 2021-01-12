const express = require('express');
const morgan = require('morgan');
const app = express();
const votes = require('./vote.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/vote', (req, res) => {
    res.json(votes);
});
app.post('/vote', (req, res) => {
    const { name, description, likes, dislikes } = req.body;

    if (name && description && likes && dislikes) {
        const id = uuidv4();
        const newVote = { ...req.body, id }
        votes.push(newVote);
        const json_votes = JSON.stringify(votes);
        fs.writeFileSync('src/vote.json', json_votes, 'utf-8');
        res.json({
            code: 0,
            msg: "Success"
        })
    } else {
        res.json({
            code: 1,
            msg: "Fail"
        })

    }
});

app.post('/thump', (req, res) => {
    const { id, thump } = req.body;
    const findId = (element) => element.id == id;
    const index = votes.findIndex(findId);
    if (index >= 0) {
        let { likes, dislikes } = votes[index];
        if (thump === "0") {
            votes[index].likes = parseInt(likes) + 1;
            const json_votes = JSON.stringify(votes);
            fs.writeFileSync('src/vote.json', json_votes, 'utf-8');
            res.json({
                code: 0,
                msg: "Success"
            })
        } else {
            votes[index].dislikes = parseInt(dislikes) + 1;
            const json_votes = JSON.stringify(votes);
            fs.writeFileSync('src/vote.json', json_votes, 'utf-8');
            res.json({
                code: 0,
                msg: "Success"
            })
        }
    } else {
        res.json({
            code: 1,
            msg: "No se encuentra el Id"
        })
    }
});


//starting the server
app.listen(4000, () => {
    console.log('server on port 4000');
});