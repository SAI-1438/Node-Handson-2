const {data}=require("../controller/api");
const route=require("express").Router();

route.get("/data", data)

module.exports=route;