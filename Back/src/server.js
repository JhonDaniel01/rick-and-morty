// const http= require("http");
// const getCharKyId=require("./controllers/getCharById");
// const getCharDetail=require("./controllers/getCharDetail")

// http.createServer((req,res)=>{
//     console.log(req.url);

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url}=req;
//     // if(url==="/rickandmorty/character/1"){
//     //     res.writeHead(200,{ 'Content-Type':'application/json' });
//     //     console.log(character[0]);
//     //     res.end(JSON.stringify(character[0]));
//     // }
//    if (url.includes("onsearch")){
//         const id= url.split("/").at(-1);
//         getCharKyId(res,id);
//    }
//    if (url.includes("detail")){
//     const id= url.split("/").at(-1);
//     getCharDetail(res,id);
//     }
// }).listen(3001,"localHost")
const express = require('express');
const router=require("./routes/index")
const server = express();
const PORT = 3001;
const cors=require("cors")
const morgan=require("morgan");

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use("/",router);

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});