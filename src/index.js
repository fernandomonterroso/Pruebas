'use strict'

const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://erick:erick123@ds263816.mlab.com:63816/heroku_gfhqj89k', {useNewUrlParser: true}).then(() => {
    // mongoose.connect('mongodb://localhost:27017/IONIC',{useNewUrlParser: true}).then(()=>{
    mongoose.connect('mongodb+srv://fernando:monterroso@cluster0-rcswk.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true}).then(()=>{
    console.log('You are connected to the database');

    app.set('port', process.env.PORT || 3000);
    app.listen(app.get('port'), () => {
        console.log(`Server is running on port ${app.get('port')}`);
        
    });
}).catch(err => console.log(err));