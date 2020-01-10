const mongoose = require('mongoose')

const configurationSchema = mongoose.Schema({
  
    name: {
        type: String,
        unique:true,
        required:true
        },
       values: {
           type: Array,
           unique: true
       }

})






const Configuration = mongoose.model('Configuration', configurationSchema)


module.exports = Configuration