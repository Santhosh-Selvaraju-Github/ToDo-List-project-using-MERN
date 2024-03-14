const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000

const router = require("./routes/router")
const db = require("./config/mongoose")
const ToDoSchema = require("./model/ToDoSchema")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",router)
// app.post("/add",(req,res)=>{
//     const content = req.body.content
//     console.log(content)
//     const details = ToDoSchema.create({
//         content : content
//     }).then(result=>res.json(result))
//     .catch(err=>res.json(err))
//     //console.log(details)
// })

app.listen(PORT,(err)=>{
    if(err) throw err
    console.log("Server is running at",PORT)
})