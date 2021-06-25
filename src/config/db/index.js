const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education', {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex: true,
        useNewUrlParser: true
    });
        console.log('success');
    }
    catch(error){
        console.log('connect failure');

    }

}
module.exports = {connect};