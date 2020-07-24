const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const empRoute = require('./api/routes/employee');
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/mern',{ useUnifiedTopology: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT || 3000;


app.use('/', empRoute);


app.listen(PORT, () => {
    console.log(`Server listen from ${PORT}.....`);
});