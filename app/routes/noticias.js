module.exports = function(app){
    app.get('/noticia', function(req, res){
        res.render('noticias/noticias');
    });
};

    