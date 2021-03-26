var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.listen(3000, function() {
    console.log("Servidor Iniciado");
});

module.exports = app;