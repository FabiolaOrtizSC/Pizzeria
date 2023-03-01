const PizzaController = require("../controllers/pizzas.controller");
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
  app.get("/api/pizzas", authenticate, PizzaController.findAllPizzas);
  app.get("/api/pizzas/ticket/:id", authenticate, PizzaController.findOneSinglePizza);
  app.put("/api/pizzas/update/:id", authenticate, PizzaController.updateExistingPizza);
  app.post("/api/pizzas/new", authenticate, PizzaController.createNewPizza);
  app.delete("/api/pizzas/delete/:id", authenticate, PizzaController.deleteAnExistingPizza);
};