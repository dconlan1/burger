var burger = require("../models/burger")
var express = require('express')
var router = express.Router()

router.get("/", function(req, res) {
    burger.getAll(function(data) {
        console.log(data)
        res.render("index", {burgers: data})
    })
})

router.post("/", function(req, res) {
    console.log(req.body.name)
    burger.insert(req.body.name)
    res.redirect('/')
})

module.exports = router