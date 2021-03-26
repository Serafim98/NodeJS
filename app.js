var app = require('./config/server');

var rotanoticias = require('./app/routes/noticias');
rotanoticias(app);
var rotaHome = require('./app/routes/home');
rotaHome(app);
var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
rotaFormInclusaoNoticia(app);






