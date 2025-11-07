const express = require('express');
const router = express.Router();
const data = require('../data/data.json'); 

function getRandomFact() {
    const facts = data.facts;
    const index = Math.floor(Math.random() * facts.length);
    if (!facts || facts.length === 0) {
        return "Error: Data not loaded or 'facts' array is empty.";
    }
    return facts[index];
}

// Render initial page
router.get('/', function (req, res) {
    const randomItem = getRandomFact();
    res.render('index', {
        title: 'Express Random Generator By Dustin',
        randomItem: randomItem
    });
});

// JSON endpoint for fetch requests (for "Get Another" button)
router.get('/random', function (req, res) {
    const randomItem = getRandomFact();
    res.json({ randomItem });
});

module.exports = router;