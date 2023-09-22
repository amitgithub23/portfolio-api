const express = require('express');
const cors = require('cors');
require('./db/config');
require('dotenv').config();
const PORT = process.eventNames.PORT || 5037;

const Contact = require('./db/contact')


const app = express();

app.use(express.json());
app.use(cors());


app.post("/contact", async (req, res) => {
    let product = new Contact(req.body);
    let result = await product.save();
    
    res.send(result)
})



app.listen(PORT, () => {
    console.log(`node js server`);
    console.log(PORT);
})
