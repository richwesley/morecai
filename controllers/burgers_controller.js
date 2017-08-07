var express = require("express");
var router = express.Router();
var db = require('../models');


router.get("/", function(req, res) {
    res.redirect("/burgers")
});

router.get("/burgers", function(req, res) {
    db.burgers.findAll().then(function(data) {
        var hbsObject = { burgers: data };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    console.log(req.body)
    db.burgers.create({
        burger_name: req.body.b_name,
        devoured: false
    }).then(function(result) {
        // console.log(result);
        res.redirect('/')
    });
});

router.put('/burgers/update/:id', function(req, res) {
    // var condition = 'id = ' + req.params.id;
    // console.log('condition ', condition);

    db.burgers.findById(req.params.id).then(function(data) {
        data.update({
            devoured: true
        }).then(function() {
            res.redirect("/");
        });
    });
})
module.exports = router;