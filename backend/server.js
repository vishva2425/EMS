const express = require("express");
require("dotenv").config();
const db = require("./config/db");
const employeeRoute = require("./routes/employeeRoute")
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/employee", employeeRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);   
})