const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required."]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    address: {
        type: String,
        required: [true, "Address is required."]
    },
    city: {
        type: String,
        required: [true, "City is required."]
    },
    state: {
        type: String,
        required: [true, "State is required."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be 8 characters or longer."]
    }
}, {timestamps: true});

//Middleware
UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10)
        console.log("HASHED CONTRASENIA", hashedPassword)
        this.password = hashedPassword;
        next();
    }catch{
        console.log("Failed to save user", error)
    }
})

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password.');
    }
    next();
});

module.exports = mongoose.model('Usuario', UserSchema)