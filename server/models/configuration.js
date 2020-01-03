const mongoose = require('mongoose')

const configurationSchema = mongoose.Schema({
    bank:[{
    name: {
        type: String,
        unique:true,
        required:true
        }}],
        allowance:[{
            name: {
                type: String,
                unique:true,
                required:true
                }}],
                classification:[{
                    name: {
                        type: String,
                        unique:true,
                        required:true
                        }}]

})

configurationSchema.pre('save', async function(next){
    const configuration=this

    
    next()

})




const Configuration = mongoose.model('Configuration', configurationSchema)


module.exports = Configuration