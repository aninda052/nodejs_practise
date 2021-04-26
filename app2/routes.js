const router = require('express').Router();

router.get('', (req, res) => {
    res.send('app2 base Page');
});

module.exports = router;
