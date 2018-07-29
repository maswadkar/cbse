const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname,"public")))
app.use("/css",express.static(path.join(__dirname,"/node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"/node_modules/bootstrap/dist/js")))
app.use('/js',express.static(path.join(__dirname,"/node_modules/jquery/dist")))

app.set('views', path.join(__dirname,'src', 'views'));
app.set('view engine', 'ejs');

const port = 8002

app.get('/',function(req,res){
	res.render('index',
			{nav:[{link:'/books',title:'books'},
			{link:'/author',title:'author'}],
			title:'Library'})
});

app.listen(port,function(){
console.log(`listening on port ${port}`)
})
