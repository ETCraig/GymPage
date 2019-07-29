const express = require('express');
const connectDB = require('./config/db');
const delegateRoutes = require('./routes/DelegateRoutes');
const app = express();

//Connects to the Mongo DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Defines & Delegates Routes
delegateRoutes(app);

const Port = process.env.PORT || 4000;

app.listen(Port, () => console.log(`Server is listening on port: ${Port}`));