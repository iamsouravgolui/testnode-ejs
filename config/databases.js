
var mongoose = require('mongoose');
var config = require('./config');

module.exports = function(){

    mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', function(){
        console.log("Mongoose default connection is open to ", config.DB);
    });

    mongoose.connection.on('error', function(err){
        console.log("Mongoose default connection has occured "+err+" error");
    });

    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose default connection is disconnected");
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0)
        });
    });
}