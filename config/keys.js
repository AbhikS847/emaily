//keys.js - figure out what credentials to return

if(process.env.NODE_ENV === 'production' ){
    module.exports = require('./prod');
}

else{
    module.exports = require('./dev');

}

//Credentials to commit//