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
        pool.query('SELECT * FROM article', function (error, results) {
            if (error) {
                throw error
            }
            if (results.rows.length == 0){
                resp.status(200).json(null);
            } else {
                resp.status(200).json(results.rows);
            }
        })
    } else {
        resp.status(200).json(null);
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