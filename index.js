const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

let users = [
    {
        id: 0,
        name: 'Eduardo Irineu dos santos',
        phone: '(82) 98871-6845'
    },
    {
        id: 1,
        name: 'Heloisa',
        phone: '(82) 98871-6845'
    }
];

app.get("/", (req, res) => {

    res.render('user', { users });
})

app.get("/about", (req, res) => {

    res.render('about');
})

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
})