const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,"public")))
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const genres=[
    'Fiction',
    'Dystopian',
    'Classic',
    'Fantasy',
    'Magical Realism',
    'Horror',
    'Mystery',
    'Thriller',
    'Philosophical Fiction',
    'Post-Apocalyptic',
  ];



const Book = require('./models/books');
const Author=require('./models/author');



const connectDB=async ()=>{

    try{
        await mongoose.connect("mongodb+srv://fizasaif:married098@bookstore.y3fsphg.mongodb.net/?retryWrites=true&w=majority")
        console.log("connected!")
    }
    catch(error){
        console.log("connection failed"+ error)
    }


}
connectDB();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))



app.get('/', (req,res)=>{
    res.render('home');
})

app.get('/home',(req,res)=>{
    res.render('home');
})
  


  app.get('/books', async (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const books = await Book.find({ genre })
        res.render('index', { books, genre })
    } else {
        const books = await Book.find({})
        res.render('index', { books, genre: 'All' })
    }
})




app.get('/books/new', (req, res) => {
    res.render('new', { genres })
})

app.post('/books', async (req, res) => {
    const newBook = new Book(req.body);
    const newAuthor=new Author(req.body);
    await newBook.save();
    await newAuthor.save();
    res.redirect("/books");
   
})
  app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const books = await  Book.findById(id)
    const author=await Author.findById(id)
    console.log(books);
    console.log(author);
    res.render('show', { books})
})



app.get('/books/:id/edit', async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('edit', { book, genres })
})

app.put('/books/:id', async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/books/${book._id}`);
})

app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Book.findByIdAndDelete(id);
    res.redirect('/books');
})

app.listen(8000, () => {
    console.log("APP IS LISTENING ON PORT 8000!")
})


