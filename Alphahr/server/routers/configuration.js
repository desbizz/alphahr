const express= require('express')
const router = new express.Router()
const Configuration = require('../models/configuration')


router.patch('/configuration/:id', async (req, res)=>{
    try{

        

       const configuration = await Configuration.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    //  await req.configuration.save()

        res.status(200).send(configuration)

    }catch (e){
        res.status(400).send(e)

    }
})

router.post('/configuration', async (req, res)=>{
    const configuration = new Configuration(req.body)
    console.log(req.body)
    try{
       await configuration.save()
        res.status(201).send(configuration) 
    }catch(e){ 
        res.status(400).send(e)

    }
})

router.get('/configuration', async (req, res)=>{

    console.log(req.query)
    const match=req.query
    console.log(match)

    try{
        const configuration = await Configuration.find(match)
       //await req.configuration.populate({path:'configurations' , match}).execPopulate()
     
        if(!configuration || configuration=={}){
            return res.status(404).send({Error:'not found'})
        }
        res.status(200).send(configuration)
    } catch (e){
        return res.status(400).send(e) 

    }
})

module.exports = router