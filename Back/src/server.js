const http= require("http");
const fs=require("fs");
const characters=require("./utils/data")

http.createServer((req,res)=>{
    console.log(req.url);

    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url}=req;
    // if(url==="/rickandmorty/character/1"){
    //     res.writeHead(200,{ 'Content-Type':'application/json' });
    //     console.log(character[0]);
    //     res.end(JSON.stringify(character[0]));
    // }
   if (url.includes("/rickandmorty/character/")){
    const id= url.split("/").at(-1);
    const character= characters.find((char)=>char.id==id);

    if(character){
        res.writeHead(200,{ 'Content-Type':'application/json' });
        res.end(JSON.stringify(character));
    }
    else{
        res.writeHead(404,{ 'Content-Type':'application/json' });
        res.end(JSON.stringify({error:"Character no fund"}));
    }
   }
}).listen(3001,"localHost")