const express = require('express')
const router = express.Router()
const Book = require('../models/book')


router.get('/', async(req,res) => {
    try{
           const books = await Book.find()
           res.json(books)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const book = await Book.findById(req.params.id)
           res.json(book)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        year_writing: req.body.year_writing,
        genreId: req.body.genreId
    })

    try{
        const a1 =  await book.save() 
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        book.title = req.body.title
        book.author = req.body.author
        book.year_writing = req.body.year_writing
        book.genreId = req.body.genreId

        const a1 = await book.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async (req, res) => {
    try {
      const deletedBook = await Genre.findByIdAndDelete(req.params.id)
      res.json(deletedBook)
    } catch (err) {
      res.send('Error ' + err)
    }
})

module.exports = router