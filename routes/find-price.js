const router = require('express').Router();

const { getPrice }  = require('../models/price');

router.get('/', getPrice, (req, res) => {
  res.json(res.data);
});

module.exports = router;
