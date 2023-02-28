const PizzaController = require("../controllers/pizzas.controller");
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
  app.get("/api/pizzas", PizzaController.findAllPizzas);
  app.get("/api/pizzas/ticket/:id", PizzaController.findOneSinglePizza);
  app.put("/api/pizzas/update/:id", PizzaController.updateExistingPizza);
  app.post("/api/pizzas/new", PizzaController.createNewPizza);
  app.delete("/api/pizzas/delete/:id", PizzaController.deleteAnExistingPizza);
};