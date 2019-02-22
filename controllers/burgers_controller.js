var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/burger/eat/:id", function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect("/index");
    });
});

module.exports = router;