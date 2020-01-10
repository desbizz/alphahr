const mongoose = require('mongoose')
const validator = require('validator')

const deductionSchema = mongoose.Schema({
    
    name: {
        type: String,
        unique:true,
        required:true
        },
        amount:{
            type: Number
        }
})

const allowanceSchema = mongoose.Schema({
    
    name: {
        type: String,
        unique:true,
        required:true
        },
        amount:{
            type: Number
        }
})
const accountSchema = mongoose.Schema({
    bankName :String,
    accountNumber : String,
    sortCode: String,
    pensionName: String,
    pensionAccount:String
   
   })
   
   const jobSchema = mongoose.Schema({
       hiredDate: String,
       status: String,
       totalMonth: Number,
       payableMonth: Number,
       unit: String,
       subUnit: String,
       designation: String,
       salaryScale: String,
       locations:String,
       divisions:String,
       classifications:String
   
   })






const individualSchema =  new  mongoose.Schema({
    
    tittle:{
        type:String,
      
        trim:true
    },
    surname:{
        type:String,
        required:true,
        trim:true
    },
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    othernames:{
        type:String,
        trim:true
    },
    staffnumber:{
        type:String,
        required:true,
        trim:true
    },
    recordnumber:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
     
        lowercase: true,
        
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is Invalid')

            }
        },
        trim:true,
        
    },
    allowances: [allowanceSchema],
    deductions: [deductionSchema],
    job : jobSchema,
    account : accountSchema


})


// Midleware 





const Individual = mongoose.model('Individual', individualSchema)


module.exports = Individual