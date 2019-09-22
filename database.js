const Mongoose = require('mongoose');

const URI = 'mongodb://themerchant:root@localhost:27017/themerchant';

const connection = Mongoose.connection;

const MONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    auth: {
        authdb: 'themerchant'
    }
}

stateMessage = (state) => console.log(`Database is now at ${state} state`);

function connectDB(){
    Mongoose.connect(URI, MONGOOSE_OPTIONS, (error) => {
        if(error){
            console.error('CONNECTION FAILED: ', error);
        }
    });


    connection.once('open', () => console.log('Database TheMerchant is now running'));
    checkDBStatus();
}


function checkDBStatus(){
    let dbState = connection.readyState;
    stateMessage(dbState);
    setTimeout(() => {
     dbState = connection.readyState;
    stateMessage(dbState);
    }, 1000)
    
}

module.exports = {
    connectDB, 
}