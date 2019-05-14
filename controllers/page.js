exports.landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}

exports.azhar = function(req, res, next) {
    res.render('landing', { title: 'Azhar' });
}

exports.abdurrasyid = function(req, res, next) {
  res.render('landing', { title: 'Abdurrasyid' });
}
