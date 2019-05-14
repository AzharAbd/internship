exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
}

exports.azhar = function(req, res, next) {
    res.render('index', { title: 'Azhar' });
}