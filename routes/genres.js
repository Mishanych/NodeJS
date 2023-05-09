const express = require('express')
const router = express.Router()
const Genre = require('../models/genre')


router.get('/', async(req,res) => {
    try{
           const genres = await Genre.find()
           res.json(genres)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const genre = await Genre.findById(req.params.id)
           res.json(genre)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const genre = new Genre({
        name: req.body.name
    })

    try{
        const a1 =  await genre.save() 
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const genre = await Genre.findById(req.params.id) 
        genre.name = req.body.name
        const a1 = await genre.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async (req, res) => {
    try {
      const deletedGenre = await Genre.findByIdAndDelete(req.params.id)
      res.json(deletedGenre)
    } catch (err) {
      res.send('Error ' + err)
    }
})

module.exports = router