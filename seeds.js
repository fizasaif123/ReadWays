const mongoose = require('mongoose');
const Book = require('./models/books');
const Author = require('./models/author');
const Genre = require('./models/genre');


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

    const booksSeed = [
      // ... (previous books)
    
      {
        title: 'Frankenstein',
        author: 'Mary Shelley',
        genre: 'Gothic Fiction',
        isbn: '9780486282114',
        biography: 'Mary Shelley was an English novelist, best known for her Gothic novel "Frankenstein."'
      },
      {
        title: 'Dracula',
        author: 'Bram Stoker',
        genre: 'Gothic Horror',
        isbn: '9780486411095',
        biography: 'Bram Stoker was an Irish author, best known for his classic Gothic horror novel "Dracula."'
      },
      {
        title: 'The War of the Worlds',
        author: 'H.G. Wells',
        genre: 'Science Fiction',
        isbn: '9780141441030',
        biography: 'H.G. Wells was an English writer, often referred to as the "father of science fiction." He is known for works like "The War of the Worlds."'
      },
      {
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        genre: 'Mystery',
        isbn: '9780061122415',
        biography: 'Arthur Conan Doyle was a British writer and physician, best known for creating the detective Sherlock Holmes.'
      },
      {
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        genre: 'Historical Fiction',
        isbn: '9780141439600',
        biography: 'Charles Dickens was an English writer and social critic, known for his novels depicting the social and economic struggles of the time.'
      },
      {
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        genre: 'Fantasy',
        isbn: '9780141439761',
        biography: 'Lewis Carroll was the pen name of Charles Lutwidge Dodgson, an English writer, mathematician, and photographer. He is best known for "Alice\'s Adventures in Wonderland."'
      },
      {
        title: 'One Flew Over the Cuckoo\'s Nest',
        author: 'Ken Kesey',
        genre: 'Psychological Fiction',
        isbn: '9780451163967',
        biography: 'Ken Kesey was an American novelist, best known for his novel "One Flew Over the Cuckoo\'s Nest."'
      },
      {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        genre: 'Historical Fiction',
        isbn: '9780143039433',
        biography: 'John Steinbeck was an American author, known for his novels portraying the struggles of the working class, including "The Grapes of Wrath."'
      },
      {
        title: 'The Iliad',
        author: 'Homer',
        genre: 'Epic Poetry',
        isbn: '9780140275360',
        biography: 'Homer is an ancient Greek poet, traditionally said to be the author of the epic poems "The Iliad" and "The Odyssey."'
      },
      {
        title: 'Pippi Longstocking',
        author: 'Astrid Lindgren',
        genre: 'Children\'s Literature',
        isbn: '9780142402498',
        biography: 'Astrid Lindgren was a Swedish author, best known for her children\'s book series featuring the character Pippi Longstocking.'
      },
      // Add more books without the publishedDate field
      // ...
    ];
    
    
      Book.insertMany(booksSeed)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
      
