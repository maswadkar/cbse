const express = require("express")


const app = express()

const port = 8001

app.get('/',function(req,res){
res.status(200).json({"message":"Hello World"})
});

app.listen(port,function(){
console.log(`listening on port ${port}`)
})
