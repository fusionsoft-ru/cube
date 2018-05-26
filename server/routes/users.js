var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('list of users');
});

module.exports = router;
