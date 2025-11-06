var fs = require('fs');
var express = require('express');
var router = express.Router();
const path = require('path');

// Helper function to get a random fact from data.json
function getRandomFact() {
    const dataPath = path.join(__dirname, '../data/data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const facts = data.facts;
    return facts[Math.floor(Math.random() * facts.length)];
}

// Render initial page
router.get('/', function (req, res) {
    const randomItem = getRandomFact();
    res.render('index', {
        title: 'My Random Generator',
        randomItem: randomItem
    });
});

// JSON endpoint for fetch requests (for "Get Another" button)
router.get('/random', function (req, res) {
    const randomItem = getRandomFact();
    res.json({ randomItem });
});

module.exports = router;
