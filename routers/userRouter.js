const controller = require("../controller/uerController")

const Route=require("express").Router()


Route.get("/get",controller.get)
Route.post("/add",controller.add)
Route.post("/update",controller.update)
Route.post("/delete",controller.delete)
module.exports=Route