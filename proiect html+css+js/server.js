const express=require('express');
const cors=require('cors');

const uid=require('uid');
const app=express();
var bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port=3000;
app.get('/',(req,res)=>res.send("doamne da-mi rabdare multa!"));

let produse=[
    {
        id:uid(10),
        nume:"Strudel cu mere",
        tip:"Produs de post",
        pret:2
    },
    {
        id:uid(10),
        nume:"Croissant cu unt",
        tip:"Produs din ingrediente de provenienta animala",
        pret:4
    },
    {
        id:uid(10),
        nume:"Placinta cu urda si stafide",
        tip:"Produs din ingrediente de provenienta animala",
        pret:2
    }
]

app.get('/lista-produse',(req,res)=>{
    res.send(produse);
});

app.post('/adauga-produs',(req,res)=>{
    const dateProdus=req.body;
    dateProdus.id=uid(10);
    produse.push(req.body);
    res.statusCode=201;
    res.send(produse);    
})

app.delete('/sterge-produs/:id',(req,res)=>{
    console.log("sterge",req.params.id)
    produse=produse.filter(produs=>produs.id!==req.params.id);
    res.send(produse);
})

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/home',function(req,res){
    res.sendFile(__dirname+'/views/home.html');
});
app.get('/products',function(req,res){
    res.sendFile(__dirname+'/views/products.html');
});
app.get('/receipes',function(req,res){
    res.sendFile(__dirname+'/views/receipes.html');
});
app.get('/info',function(req,res){
    res.sendFile(__dirname+'/views/info.html');
});
app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/views/contact.html');
});
app.get('*',function(req,res){
    res.status(404).sendFile(__dirname+'/views/error.html');
});
app.listen(port,()=>console.log(`bye123`));
//app.listen(port,()=>console.log(`Listening at http://localhost:${port}`));

