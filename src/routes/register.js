const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('./../models/user');
const app = express();

 
app.post('/register', function (req, res) {
    let body = req.body;

    let { nombre,apellido, email, password, role } = body;
    let usuario = new Usuario({
      nombre,
      apellido,
      email,
      password: bcrypt.hashSync(password, 10),
      role
    });

});

module.exports = app;

