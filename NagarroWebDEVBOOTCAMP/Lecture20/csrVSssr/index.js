const express = require('express')
const path = require('path')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.listen(3000,()=>{
    console.log(`app is served at 3000`);
})