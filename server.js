const express = require("express")
const path = require("path")

const app = express()
app.use(express.static(path.join(__dirname,"public")))

app.use("/css",express.static(path.join(__dirname,"/node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"/node_modules/bootstrap/dist/js")))
app.use('/js',express.static(path.join(__dirname,"/node_modules/jquery/dist")))


const port = 8002

app.get('/',function(req,res){
res.sendFile(path.join(__dirname,"/views","/index.html"))
});

app.listen(port,function(){
console.log(`listening on port ${port}`)
})
