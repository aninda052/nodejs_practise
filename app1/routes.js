const router = require('express').Router();

router.get('', (req, res) => {
    res.send('app1 base Page');
});

module.exports = router;
