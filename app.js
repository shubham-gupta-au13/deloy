import express from "express";
import mongoose from "mongoose";
import ProductModel from "./model/productSchema.js"
const app = express()
app.use(express.json())

const PORT = 8000

mongoose
    .connect("mongodb+srv://shubham:1n7QALpT5WcGffQK@cluster0.jbvpa.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('DB Connected')).catch(function(){
        console.log("error")
    })

app.get("/",function(req,res){
    res.send("Home age")
})

app.get("/getproduct",async function(req,res){
    try{
 
        const data = await ProductModel.find()
        res.status(200).json(data)
    }
    catch(err){
        res.send(err)
    }
})
app.post("/addProduct",async function(req,res){

    console.log(req.body)
    const {name,price} = req.body

    try{
        const newItem = new ProductModel({
            name:name,
            price:price
    
        })
      const data = await newItem.save()
      res.send("Product added sucessfully")
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
   
})
app.listen(PORT,function(){
    console.log("server is running")
})