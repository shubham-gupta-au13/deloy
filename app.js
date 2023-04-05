import express from "express";
const app = express()

const PORT = process.env.PORT || 8000

app.get("/",function(req,res){
    res.send("Home age")
})
app.listen(PORT,function(){
    console.log("server is running")
})