const express = require("express");
const routes = require("./routes/index");


//  creating our app
const app = express();

// creating a port to either our deployment or port 5000
const PORT = process.env.PORT || 5000

// requiring our models
const db = require("./models")

//  handling data parsing with express
app.use(express.urlencoded({ extended: true }));
// making sure we can use json format
app.use(express.json());

// Serving up static assets
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// app.use(routes);

// syncing database with sequlice and listening to our port.
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`App is listening on PORT ${PORT}`);
    });
});
