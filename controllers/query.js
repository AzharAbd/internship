var pg = require('pg');
var pool = new pg.Client("postgres://myapi:azhar1e3@localhost:5432/myapi");
pool.connect();

const getArticlesbyID = function (keyword, source, resp){
    pool.query("SELECT * FROM article WHERE description LIKE $1 AND source_name LIKE $2 order by id;", [keyword,source],  function (error, results) {
        if (error) {
            throw error
        }
        if (results.rows.length != 0){
            resp.status(200).json(results.rows);
        } else {
            resp.status(200).json();
        }
    })
}

const getArticlesbyPublish = function (keyword, source, resp){
    pool.query("SELECT * FROM article WHERE description LIKE $1 AND source_name LIKE $2 order by publishedAt;", [keyword,source],  function (error, results) {
        if (error) {
            throw error
        }
        if (results.rows.length != 0){
            resp.status(200).json(results.rows);
        } else {
            resp.status(200).json();
        }
    })
}

const initializeVar = function (req, resp, check) {    
    if (check){
        var keyword;
        var source;
        var persen = '%';
        if (req.query.q === ""){
            keyword = persen;
        } else {
            keyword = persen.concat(req.query.q,persen);
        }
        console.log("keyword:", keyword);
        if (req.query.source === ""){
            source = persen;
        } else {
            source = req.query.source;
        }
        if (req.query.sortBy == "id"){
            getArticlesbyID(keyword, source, resp);
        } else {
            getArticlesbyPublish(keyword, source, resp);
        }
        
    } else {
        console.log("api key salah");
        resp.status(200).json();
    }
}

const checkKey = function (req, resp){
    var a_key = req.query.key;
    const myPromise = new Promise(function(resolve, reject){
        pool.query('select * from api_key where key = $1', [a_key], function (error, results){
            if (error){
                reject('error');
            } else if (results.rows.length == 0){
                resolve(0);
            } else {
                resolve(1);
            }
        })
    })
    myPromise
    .then(function resolved(response) {
      console.log(response);
      initializeVar(req,resp, response);
    })
    .catch(function rejected(err) {
      console.error(err)
    })
}

module.exports = {
    checkKey
}

//debug=myapp:* npm start