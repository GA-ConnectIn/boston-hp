const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('hello lu');
});

module.exports = router;
