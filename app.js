const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/LibraryDB'
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const app = express()
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

//mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const bookRouter = require('./routes/books')
const genreRouter = require('./routes/genres')

app.use('/genres', genreRouter)
app.use('/books', bookRouter)




app.listen(9000, () => {
    console.log('Server started')
})