const { required } = require('express');
const express = require('express');
const coffeeRouter = express.Router();
const cofffeModel= require('../Model/coffeeModel');
coffeeRouter.use(express.json())


coffeeRouter.post('/createorder', async (req, res) => {

    console.log('api created calling')
    const coffeModels = new cofffeModel({
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        size:req.body.size
    })

 const coffee = await coffeModels.save()
 try{

    res.send({status: 'success',message: 'your order is successfully'})
 }
 catch(errors){
    res.send({status: 'failed',message: 'unable to save data try again'})

}

})

coffeeRouter.get('/getdata',async (req, res) => {

    try{
        const datas = await cofffeModel.find({})
        res.send({status: 'success',message: 'your order history is',response: datas})
    }
    catch(errors){
        res.send({status: 'failed',message: 'unable to save data try again'})
    }
})

module.exports = coffeeRouter

