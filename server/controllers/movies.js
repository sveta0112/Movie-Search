const Movie = require('../../database//models/movie_list.js');

exports.getAll = (req, res) => {
    Movie.find({}, (err, result) => {
        if(err){
            res.json(0);
        }else{
            res.json(result);
        }
    })
}


exports.addMovie = (req, res) => {
    console.log('body', req.body.id);
    Movie.create(req.body).then(result => {
        res.send(result);
    })
}