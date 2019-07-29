const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

const Port = process.env.PORT || 4000;

app.listen(Port, () => console.log(`Server is listening on port: ${Port}`));