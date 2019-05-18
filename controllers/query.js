// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'myapi',
//   host: 'localhost',
//   database: 'myapi',
//   password: 'azhar1e3',
//   port: 5432,
// })

var pg = require('pg');
var pool = new pg.Client("postgres://myapi:azhar1e3@localhost:5432/myapi");
pool.connect();

const getArticles = function (req, resp, check) {    
    if (check){
        var keyword;
        var source;
        var persen = '%';
        if (req.query.keyword === ""){
            keyword = persen;
            console.log("Keyword is empty");
        } else {
            keyword = persen.concat(req.query.keyword,persen);
            console.log("Keyword is NOT empty");
        }
        console.log("keyword:", keyword);
        if (req.query.source === ""){
            source = persen;
            console.log("Source is empty");
        } else {
            source = req.query.source;
            console.log("Source is NOT empty");
        }
        sort_by = req.query.sort_by;
        console.log("order by:", sort_by);
        console.log("source:",source);
        pool.query("SELECT * FROM article WHERE description LIKE $1 AND source_name LIKE $2 order by publishedAt;", [keyword,source],  function (error, results) {
            if (error) {
                throw error
            }
            if (results.rows.length != 0){
                console.log("Data tersedia");
                resp.status(200).json(results.rows);
            } else {
                console.log("data tidak ada");
                resp.status(200).json();
            }
        })
    } else {
        console.log("api key salah");
        resp.status(200).json();
    }
}

const checkKey = function (req, resp){
    var a_key = req.query.api_key;
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
      getArticles(req,resp, response);
    })
    .catch(function rejected(err) {
      console.error(err)
    })
}

module.exports = {
    getArticles,
    checkKey
}

//debug=myapp:* npm start