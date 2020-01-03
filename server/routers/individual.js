const express= require('express')
const router = new express.Router()
const Individual = require('../models/individual')




router.post('/individual', async (req, res)=>{
    const individual = new Individual(req.body)
    try{
       await individual.save()
        res.status(201).send(individual) 
    }catch(e){ 
        res.status(400).send(e)

    }
})

router.patch('/individual/:id', async (req, res)=>{
    try{

        

     const individual = await Individual.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
       await req.individual.save()

        res.status(200).send(individual)

    }catch (e){
        res.status(400).send(e)

    }
})

router.get('/individual', async (req, res)=>{

    console.log(req.query)
    const match=req.query
    console.log(match)

    try{
        const individual = await Individual.find(match)
       //await req.individual.populate({path:'individuals' , match}).execPopulate()
     
        if(!individual || individual=={}){
            return res.status(404).send({Error:'not found'})
        }
        res.status(200).send(individual)
    } catch (e){
        return res.status(400).send(e) 

    }
})

router.get('/individual/:id', async (req, res)=>{
    const _id = req.params.id
    try{
        const individual = await Individual.findOne({_id})

        if(!individual){
            return res.status(404).send({Error:'not found'})
        }
            res.status(200).send(individual)
    }
   
    catch (e){
        return res.status(400).send(e)

    }
})

module.exports=router