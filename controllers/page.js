exports.landing = function(req, res, next) {
  res.render('landing', { title: 'Express', nama: '', email :'' });
}

exports.azhar = function(req, res, next) {
  res.render('landing', { title: 'Azhar', nama: '', email :'' });
}

exports.submit_lead = function(req, res, next) {
  console.log("email:", req.body.email);
  console.log("nama:",req.body.nama);
  console.log("masuk");
  res.render('landing', { title: 'Submit' , nama: req.body.nama, email :req.body.email});
}
exports.v2 = function(req, res, next) {
  res.render('submit');
}
