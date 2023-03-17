const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express()
app.use(express.json())

const coffeeRouter = require('./Router/router');

app.use('/shop',coffeeRouter)
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors);

const port = 10000;
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
// const urlString = "mongodb://127.0.0.1:27017/res"

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

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
// app.listen(() => {
//         console.log('your server is connected successfully.')
//         })

