const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const userroute = require("./Routes/UserRoute.js")
const productroute = require("./Routes/ProductRoute.js")
require('dotenv').config()
const port = process.env.PORT || 8000





app.use(express.json());
app.use(cors({
  origin:"*"
}))

app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB CONNECTED");
  });
  



app.use("/",userroute)
app.use("/",productroute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})