const route=require("./routes/routes")
const express=require('express')
const app=express();
app.use('/api/main',route)
app.listen(8000)
