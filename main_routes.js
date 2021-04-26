const router = require('express').Router();
router.use('/app1', require('./app1/routes'));
router.use('/app2', require('./app2/routes'));
const User = require('./app1/collections');

router.get('', async (req, res) => {
    res.send('base Page');
});

router.get('/login', async (req, res) => {
    res.send('login Page');
});

router.post('/login', async (req, res) => {
    res.send('login Page');
});

router.get('/registration', async (req, res) => {
    res.send('Registartion Page');
});

router.post('/registration', async (req, res) => {
    const user = new User(req.body);
    await user.save((err) => {
        if (err) {
            res.status(500).json({
                error: err,
            });
        } else {
            res.status(200).json({
                mgs: 'data save successful',
            });
        }
    });
});

module.exports = router;
