const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express();
app.use(express.json())

const coffeeRouter = require('./Router/router');

app.use('/shop',coffeeRouter)
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors);


const urlString = "mongodb+srv://vibish123:vibish123@cluster0.jcfnzmz.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(urlString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    })
mongoose.connection.once("open", () => {
    console.log("Connected!");
}).on("error", function(error) {
    console.log("Connection Error:", error);
});


app.listen(() => {
        console.log('your server is connected successfully.')
        })

