const express = require('express');
const booksRouter = express.Router();
const authorsRouter = express.Router();
const app = express();

app.use('/public',express.static(__dirname +'/public'));
app.set('view engine','ejs');
app.set('views','./src/views'); 

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);

app.get('/',function(req,res){
    res.render("index",{
        title:'Library',
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
    });
});

app.get('/login',function(req,res){
    res.render("login",{
        title:'Login',
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
    });
});

app.get('/signup',function(req,res){
    res.render("signup",{
        title:'Sign-up',
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
    });
});


var books= [
    {
        title:'The Fault in Our Stars',
        author:'John Green',
        genre:'Novel',
        img:'star.jpg'
    },
    {
        title:'Attack on Titan',
        author:'Hajime Isayama',
        genre:'Manga',
        img:'titan.jpg'
    },
    {
        title:'The Expanse',
        author:'James S. A. Corey',
        genre:'Science fiction',
        img:'expanse.jpg'
    }
];


var authors= [
    {
        name:'John Green',
        img:'john.jpg'
    },
    {
        name:'Hajime Isayama',
        img:'hajime.png'
    },
    {
        name:'James S. A. Corey',
        img:'corey.jpg'
    }
];


booksRouter.get('/',function(req,res){
    res.render("books",{
        title:'Books',
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
        books
    });
});

authorsRouter.get('/',function(req,res){
    res.render("authors",{
        title:'Authors',
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
        authors
    });
});


authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render("author",{
        title:'Author',
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
        author:authors[id]
    });
});


app.listen(5000);
