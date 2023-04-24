const express = require('express');
const fs = require('fs');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
json = express.json({type:'*/json'});
app.use(cors())
app.use(json);
app.use(bodyParser.urlencoded({extended:false}));

app.post('/',(req,res)=>{
    // let name = +new Date();
    fs.writeFile('./文章/'+req.body.title+'.json',JSON.stringify(req.body.layout),(err,data)=>{
        if(err) res.send({type:'error'});
        res.send({type:'ok'});
    });
})
app.get('/',(req,res)=>{
    const articleArr = [];
    fs.readdir('./文章/',(err,files)=>{
        files.forEach(filename=>{
            articleArr.push(filename);
        })
        console.log(articleArr);
        // res.send({data:articleArr});
        res.end(JSON.stringify(articleArr));
    })
})
app.get('/article/:articleName',(req,res)=>{
    console.log(req.params.articleName);
    fs.readFile('./文章/'+req.params.articleName,(err,data)=>{
        if(err) res.end({type:'error'});
        res.end(data);
    })
})
app.listen(3000,()=>{
    console.log('服务端已经运行...');
})
