const express = require("express");
const app = express();
const router = express.Router();
const restaurentRout = require('./routers/restaurentApi');
const menuRout = require('./routers/menuApi');
const cors = require('cors');
const test = require("./controler/test");
const update = require("./routers/UpdateApi")

const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
// app.get("/" , (req , res)=>{
//     res.send("hello world");
// })
app.options('*', cors());
app.use('/api' , restaurentRout ,  menuRout ,update ,test  );

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
})