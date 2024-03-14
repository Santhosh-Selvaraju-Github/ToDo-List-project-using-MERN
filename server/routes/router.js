const express = require("express")
const router = express.Router()
const path = require("path")
const ToDoSchema = require("../model/ToDoSchema")

//GET method
router.get("/get",(req,res)=>{
    const todoTasks = ToDoSchema.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

//POST method
router.post("/add",(req,res)=>{
    const details = ToDoSchema.create({
        content : req.body.content
    })
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    //console.log(details)
})

//DELETE method
router.delete("/remove/:id",(req,res)=>{
    const id = req.params.id
    const details = ToDoSchema.findByIdAndDelete(id)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

//PUT method
router.put("/complete/:id",(req,res)=>{
    const id = req.params.id
    const details = ToDoSchema.findByIdAndUpdate(id,{complete:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

// router.put("/edit/:id",(req,res)=>{
//     const id = req.params.id
//     const details = ToDoSchema.findByIdAndUpdate(id,{content:comtent})
//     .then(result=>res.json(result))
//     .catch(err=>res.json(err))
// })

module.exports = router