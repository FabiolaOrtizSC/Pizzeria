const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
	idCliente: {
        type: String,
        required: [true, "Cliente is required"]
    },
    method: {
        type: String,
        required: [true, "Method is required"]
    },
    size: {
        type: String,
        required: [true, "Size is required"]
    },
    crust: {
        type: String,
        required: [true, "Crust is required"]
    },
    qty: {
        type: Number,
        required: [true, "Qty is required"]
    },
    toppings: {
        type: Array,
        required: [true, "Toppings are required"]
    },
    price: {
        type: String,
        required: [true, "Price is required"]
    },
    favorite: {
        type: Boolean,
        required: [true, "Favorite is required"]
    }
}, {timestamps: true});

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;