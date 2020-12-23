const express = require('express')
const app = express();
const port = 4008;
const home = require('./home')
app.use("/home", home)
const contact = require('./contact')
app.use("/contact", contact)
const about = require('./about')
app.use("/about", about)
app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("hi")
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
