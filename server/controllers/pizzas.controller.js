const Pizza = require("../models/pizzas.model");

module.exports.findAllPizzas = (req, res) => {
  Pizza.find()
    .then(allDaPizzas => res.json({ allDaPizzas }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

module.exports.findOneSinglePizza = (req, res) => {
	Pizza.findOne({ _id: req.params.id })
		.then(oneSinglePizza => res.json({ oneSinglePizza }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

module.exports.createNewPizza = (req, res) => {
  Pizza.create(req.body)
    .then(newlyCreatedPizza => res.json({ newlyCreatedPizza }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

module.exports.updateExistingPizza = (req, res) => {
  Pizza.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true , new: true })
    .then(updatedPizza => res.json({ updatedPizza }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

module.exports.deleteAnExistingPizza = (req, res) => {
  Pizza.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};
