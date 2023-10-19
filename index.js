
const connectToMongo = require('./db');
const express = require('express')

var cors = require('cors');

connectToMongo();
const app = express()

const port = 8080

app.use(cors())
app.use(express.json())
 

// app.use(fileUpload({
//   useTempFiles:true
// }))
//available routes
app.use("/api", require("./Routes/ProducteRoutes"));
  
app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'bad request'
  })
})

app.listen(port, () => {
  console.log(`Mad-Pharma backend listening at on //localhost:${port}`)
})

module.exports = app;