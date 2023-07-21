const express = require('express')
const app = express()
require("dotenv").config()
const port=process.env.Port
const connect=require("./helpers/dbConnect")
const userRouter=require("./routers/userRouter")
app.use(express.json())
app.use("/users",userRouter)
connect()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))