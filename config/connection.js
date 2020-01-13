var mysql = require("mysql")

connection = mysql.createConnection("mysql://j9arb978aahtofe2:rmvhfdwiuiqoe1mn@s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ml7f66p3auoj88e5")

connection.connect(function (err) {
    if (err) {
        console.log("There was an error connecting")
        return;
    }
    console.log("Connected to database")
});

module.exports = connection;