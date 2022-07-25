const express = require('express');
const taskRouter = require('./tasks/task.router').router

const app = express();

app.use(express.json());

app.use('/todolist/v1', taskRouter)

//* localhost:8000/todolist/v1/tasks

app.listen(8000, () => {
    console.log("Server started at port 8000");
  });
  