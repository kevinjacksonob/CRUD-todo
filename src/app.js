const express = require ("express");
const db = require("./utils/database");
const PORT = 8000;
const cors = require ("cors");
const Todo = require ("./models/todo.model");
const todoRoutes = require("./routes/todo.routes");

Todo;

db.authenticate()
  .then(() => {
     console.log("Conexion a base da datos ok");
  })
  .catch((error) => {
    console.log(error)
  });

db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.log(error);
  });

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(todoRoutes);

  app.get("/",(req,res) => {
    res.send("server Todos")
  });

  app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
  })