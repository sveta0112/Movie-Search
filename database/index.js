// const mongoose = require('mongoose');

// // const mongoURI = 'mongodb://localhost:27017/movies';

// const mongoURI = process.env.MONGODB_URI || 'mongodb://lana:lana1234@ds115762.mlab.com:15762/movies';


// const db = mongoose.connect(mongoURI, {useNewUrlParser: true})

// db
//   .then(db => console.log(`Connected to: ${mongoURI}`))
//   .catch(err => {
//       console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
//       console.log(err);
//   });


//   module.exports = db;


const mongoose = require('mongoose');


// const mongoUri = 'mongodb://localhost:27017/movies';

const mongoUri = process.env.MONGODB_URI || 'mongodb://lana0112:lana1234@ds115762.mlab.com:15762/movies'


const db = mongoose.connect(mongoUri);

module.exports = db;