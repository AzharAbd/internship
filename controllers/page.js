exports.landing = function(req, res, next) {
  res.render('landing', { title: 'Express', nama: req.query.nama, email :req.query.email });
}

exports.azhar = function(req, res, next) {
  res.render('landing', { title: 'Azhar'});
}

exports.show_result = function(req, res, next) {
  res.json({nama: req.query.nama, email :req.query.email});
  // res.render('result', { nama: req.query.nama, email :req.query.email });
}