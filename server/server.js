const express = require("express")
const dotenv = require("dotenv");
const connection = require("./config/database");
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


app.get("/", (req, res) => {
    res.send("BACKEND API is running ON PORT 8800");
  });   
  app.listen(8800,()=>
  {
      try {
          connection()
          console.log("Server is running on port 8800")
      } catch (error) {
          console.log(error)
      }
  })