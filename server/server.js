const express = require("express")
const dotenv = require("dotenv");
// const connection = require("./config/database");
const connectDataBase = require("./config/database");
const cors = require('cors')
const userRoutes= require("./routes/userRoutes")
const projectRoutes= require("./routes/projectRoutes")
const taskRoutes= require("./routes/taskRoutes")

const app = express();
app.use(cors())

dotenv.config();
app.use(express.json());

app.use('/user',userRoutes);
app.use('/projects',projectRoutes);
app.use('/tasks',taskRoutes);


connectDataBase();
app.get("/", (req, res) => {
    res.send("BackendAPI is running..");
  });   
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`listning to port  http//localhost:${PORT}`)
})