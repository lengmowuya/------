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
    let name = +new Date();
    fs.writeFile('./文章/'+name+'.json',JSON.stringify(req.body),(err,data)=>{
        if(err) res.send({type:'error'});
        res.send({type:'ok'});
    });
})
app.listen(3000,()=>{
    console.log('服务端已经运行...');
})