const mongoose = require('mongoose')

const configurationSchema = mongoose.Schema({
 
    values:{
        type:Array,
      
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    }
    

})






const Configuration = mongoose.model('Configuration', configurationSchema)


module.exports = Configuration