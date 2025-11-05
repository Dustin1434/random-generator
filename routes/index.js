var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    // read from data.json
    fs.readFile('./data/data.json', 'utf8', function (err, data) {
        // randomly select an item from data
        if (err) {
            console.log(err);
            return;
        }
        const jsonData = JSON.parse(data);
        const facts = jsonData.facts;
        randomItem = facts[Math.floor(Math.random() * facts.length)];
        // render the index.hbs template with the randomly selected item 
        res.render('index', {
            title: 'My Random Generator',
            randomItem: randomItem,
        });
    });
});

module.exports = router;
