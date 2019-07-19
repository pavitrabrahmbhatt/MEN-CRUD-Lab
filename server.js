const express = require('express')

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// require the express module from the node_modules folder
// node automatically will look in node_modules for us
const app = express();

require('./db/db.js')

const robotController = require('./controllers/robotController')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.use('/robots', robotController)

app.listen(3000, () => {
	console.log("server is running");
})		