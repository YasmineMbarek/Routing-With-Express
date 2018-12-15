const express=require ('express')
const app = express()
app.use(time = (req,res,next)=>{
    let requestdate= new Date(); 
    console.log(requestdate) 
    if(requestdate.getHours()>=17 || requestdate.getHours()<=8){
        console.log("close")
        res.sendFile(__dirname+'/Close.html')
    }
    next() }),
app.use(express.static(__dirname+'/public')) 
app.listen(3000,(err)=>{
    if(err) console.log("server not running")
    else console.log("server  running port 3000")
})