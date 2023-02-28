const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');

require('./server/config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

require('./server/routes/pizzas.routes')(app);
require('./server/routes/user.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});